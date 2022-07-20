import styled, { css } from 'styled-components';

export const Section = styled.section`
   padding-bottom: 2.25rem;
`;

export const Content = styled.div`
   margin: 0 auto;
   width: 100%;
   max-width: 46rem;

   display: flex;
   align-items: center;
   flex-direction: column;
`;

export const CreateTaskWrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   margin-top: -1.7rem;
   margin-bottom: 4rem;

   input {
      width: 39.5rem;
      margin-right: 0.5rem;
      padding: 1rem;
      border: none;
      border-radius: 8px;
      background: var(--gray-500);
      color: var(--gray-100);
   }

   button {
      padding: 1rem;
      border: none;
      border-radius: 8px;
      background: var(--blue-dark);
      color: var(--gray-100);

      display: flex;
      align-items: center;

      transition: background 0.2s;

      &:not(:disabled):hover {
         background: var(--blue);
      }

      &:disabled {
         cursor: not-allowed;
      }

      img {
         width: 1rem;
         height: 1rem;
         margin-left: 0.5rem;
      }
   }
`;

export const TasksCounterWrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const CreatedTasks = styled.div`
   display: flex;
   align-items: center;

   p {
      font-size: 87.5%;
      font-weight: 700;
      color: var(--blue);
   }
`;

export const CounterCreated = styled.div`
   padding: 2px 8px;
   background-color: var(--gray-400);
   border-radius: 999px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 0.5rem;
`;

export const CompletedTasks = styled.div`
   display: flex;
   align-items: center;

   p {
      font-size: 87.5%;
      font-weight: 700;
      color: var(--purple);
   }
`;

export const CounterCompleted = styled.div`
   padding: 2px 8px;
   background-color: var(--gray-400);
   border-radius: 999px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 0.5rem;
`;
