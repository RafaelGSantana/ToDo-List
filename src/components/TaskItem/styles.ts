import styled, { css } from "styled-components";

export interface IconProps {
   isCheck: boolean;
}

export const Container = styled.div`
   width: 100%;
   height: auto;
   min-height: 4.5rem;
   background: var(--gray-500);
   border-radius: 8px;
   padding: 1rem;
   margin-top: 1.5rem;

   display: flex;
   align-items: flex-start;

   & + div {
      margin-top: 0.75rem;
   }
`;

export const InputWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const RadioInput = styled.div<IconProps>`
   width: 1.125rem;
   height: 1.125rem;
   background: var(--gray-500);
   border: 2px solid var(--blue);
   border-radius: 50%;
   margin-right: 0.75rem;
   cursor: pointer;

   display: flex;
   align-items: center;
   justify-content: center;

   svg {
      visibility: hidden;
   }

   ${(props) => props.isCheck && css`
      border: none;
      background: var(--purple);
    
      svg {
         visibility: visible;
         color: var(--gray-100);
         font-weight: bold;
      }
   `}
`;

export const ParagraphWrapper = styled.div`
   width: 100%;

   p {
      color: var(--gray-100);
   }
`;

export const IconWrapper = styled.div`
   width: 2rem;
   height: 100%;
   cursor: pointer;

   display: flex;
   justify-content: flex-end;

   svg {
      width: 1rem;
      height: 1rem;
      color: var(--gray-300);
      transition: color 0.2s;

      &:hover {
         color: var(--danger);
      }
   }
`;