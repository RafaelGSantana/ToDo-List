import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: auto;
   min-height: 244px;
   margin-top: 1.5rem;
   border-top: 1px solid var(--gray-300);

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   img {
      width: 56px;
      height: 56px;
      margin-bottom: 1rem;
   }

   p {
      font-weight: 700;
      line-height: 1.4rem;
      color: var(--gray-300);
   }

   p:last-child {
      font-weight: 400;
   }
`;