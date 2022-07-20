import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { GlobalStyle } from './global';

import plus from './assets/plus.svg';

import { Header } from './components/Header';

import {
   Section,
   Content,
   CreateTaskWrapper,
   TasksCounterWrapper,
   CreatedTasks,
   CounterCreated,
   CompletedTasks,
   CounterCompleted,
} from './AppStyles';
import { TaskItem } from './components/TaskItem';
import { TaskWrapper } from './components/TaskWrapper';

interface TasksProps {
   id: string;
   title: string;
   isComplete: boolean;
}

function App() {
   const [tasks, setTasks] = useState<TasksProps[]>([]);
   const [newTask, setNewTask] = useState('');

   function handleCreateNewTask(event: FormEvent) {
      event.preventDefault();

      const task = {
         id: uuidv4(),
         title: newTask,
         isComplete: false
      };

      setTasks([...tasks, task]);
      setNewTask('');
   }

   function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
      event.target.setCustomValidity('');
      setNewTask(event.target.value);
   }

   function deleteTask(idTask: string) {
      const tasksWithoutTheDeletedOne = tasks.filter(task => {
         return task.id !== idTask;
      });

      setTasks(tasksWithoutTheDeletedOne);
   }

   function completeTask(idTask: string) {
      // Encontra o index da task selecionada
      const taskIndex = tasks.findIndex((task) => {
         return task.id == idTask;
      });
      // Variável com array de todas as tasks do state
      const tempTasks = [...tasks];
      // Define novo valor para a propriedade isComplete da task selecionada
      tempTasks[taskIndex].isComplete = !tempTasks[taskIndex].isComplete;
      // Altera o valor do estado com todas as tasks, e alteraçoes feitas.      
      setTasks(tempTasks);
   }
   
   const completedTasks = tasks.filter((task) => {
      return task.isComplete === true
   })

   const inputIsFilled = newTask.length >= 1;

   return (
      <div className="App">
         <GlobalStyle />
         
         <Header />

         <Section>
            <Content>
               <CreateTaskWrapper>
                  <input
                     type="text"
                     placeholder='Adicione uma nova tarefa'
                     onChange={handleNewTask}
                     value={newTask}
                     required
                  />
                  <button
                     disabled={!inputIsFilled}
                     onClick={handleCreateNewTask}
                  >
                     Criar
                     <img src={plus} alt="ícone com sinal de soma com um círculo em volta" />
                  </button>
               </CreateTaskWrapper>

               <TasksCounterWrapper>
                  <CreatedTasks>
                     <p>Tarefas criadas</p>
                     <CounterCreated>
                        {tasks.length}
                     </CounterCreated>
                  </CreatedTasks>

                  <CompletedTasks>
                     <p>Concluídas</p>
                     <CounterCompleted>
                        {
                           tasks.length === 0
                              ? "0"
                              : `${completedTasks.length} de ${tasks.length}`
                        }
                     </CounterCompleted>
                  </CompletedTasks>
               </TasksCounterWrapper>

               {
                  tasks.length === 0
                     ?
                     <TaskWrapper />
                     :
                     tasks.map(task => (
                        <TaskItem
                           key={task.id}
                           id={task.id}
                           title={task.title}
                           isComplete={task.isComplete}
                           onDeleteTask={deleteTask}
                           onCompleteTask={completeTask}
                        />
                     ))
               }
            </Content>
         </Section>
      </div>
   )
}

export default App
