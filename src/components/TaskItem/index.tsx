import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { GoCheck } from 'react-icons/go';

import {
   Container,
   InputWrapper,
   RadioInput,
   ParagraphWrapper,
   IconWrapper
} from './styles';

interface TaskItemProps {
   id: string;
   isComplete: boolean;
   title: string;
   onDeleteTask: (id: string) => void;
   onCompleteTask: (id: string) => void;
}

export function TaskItem({ isComplete, title, id, onDeleteTask, onCompleteTask }: TaskItemProps) {
   const [isChecked, setIsChecked] = useState(false);

   function handleCheckTask() {
      setIsChecked((state => {
         return !state;
      }));

      onCompleteTask(id);
   }

   function handleDeleteTask() {
      onDeleteTask(id);
   }

   return (
      <Container>
         <InputWrapper>
            <RadioInput
               onClick={handleCheckTask}
               isCheck={isChecked}  
            >
               <GoCheck />
            </RadioInput>
         </InputWrapper>

         <ParagraphWrapper>
            <p>{title}</p>
         </ParagraphWrapper>

         <IconWrapper>
            <FiTrash2
               onClick={handleDeleteTask}
            />
         </IconWrapper>
      </Container>
   )
}