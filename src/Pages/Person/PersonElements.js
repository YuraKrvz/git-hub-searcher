import styled from 'styled-components';

export const PersonInner = styled.div`
   display: flex;
   //align-items: baseline;

   height: 100%;
   max-width: 670px;
`;
export const DataWrapper = styled.div`
   
`;
export const Img = styled.img`
margin: 0 50px;
   align-self: flex-start;
`;

export const Button = styled.a`
   align-self: flex-start;
   padding: 4px 20px;
   margin-left: 20px;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   text-align: center;
   text-decoration: none;
   //background: linear-gradient(90deg, rgba(93,12,255,1) 0%, rgba(155,0,255,1) 100%);
   background-color: #5d0cff;
   color: #000;
`;

export const P = styled.p`
   border-top: 2px solid #5d0cff;
   width 550px;
   padding-top: 10px;
   margin: 10px;
   text-align: center;
`;