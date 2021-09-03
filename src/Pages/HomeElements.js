import styled from 'styled-components';

export const Container = styled.div`
   max-width: 770px;
   padding: 20px 0;
   margin: 20px auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: silver;
   color: #000;
   min-height: 100%;
   border-radius: 10px;
`;

export const Input = styled.input`
   width: 350px;
   height: 40px;
   font-size: 20px;
   margin-top: 10px;
   padding: 14px 32px 14px 16px;
   border-radius: 4px 0 0 4px;
   border: 2px solid #000;
   outline: none;
   background: transparent;
   color: #000;

   // $:placeholder{
   //    color: black;
   // }
   &:hover{
      transition: all 0.2s ease-in-out;
   }
`;

export const A = styled.a`
   display: flex;
   text-align: center;
   align-items: center;
   justify-content: space-between;
   margin: 30px;
   padding: 10px;
   color: inherit;
   text-decoration: none;
   border-bottom: 2px solid #000;
   width: 100%;
`;

export const Ul = styled.ul`
   min-height: 450px;
`;

export const Li = styled.li`
   color: #000;
`;

export const H5 = styled.div`
   margin: 10px 0;
   color: #000;
`;