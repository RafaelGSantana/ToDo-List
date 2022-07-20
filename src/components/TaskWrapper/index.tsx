import clipboard from '../../assets/clipboard.svg';

import { Container } from './styles';

export function TaskWrapper() {
   return (
      <Container>
         <img src={clipboard} alt="ícone clipboard" />

         <p>Você ainda não tem tarefas cadastradas</p>
         <p>Crie tarefas e organize seus itens a fazer</p>
      </Container>
   )
};
