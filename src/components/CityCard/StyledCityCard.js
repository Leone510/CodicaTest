import styled from 'styled-components';

export const StyledCityCard = styled.div`
   margin: 10px;
   padding: 10px;
   width: 400px;
   height: 200px;
   position: relative;
   display: flex;
   flex-direction: column;
   border-radius: 5px;
   -webkit-box-shadow: 5px 5px 5px 1px rgba(34, 60, 80, 0.6);
   -moz-box-shadow: 5px 5px 5px 1px rgba(34, 60, 80, 0.6);
   box-shadow: 5px 5px 5px 1px rgba(34, 60, 80, 0.6);
   cursor: pointer;
   background: #ABCDEF;
   box-sizing: border-box;
   transition: all 0.4s;

   &:hover {
      transform:translate(5px, -5px);
      -webkit-box-shadow: 10px 10px 5px 1px rgba(34, 60, 80, 0.6);
      -moz-box-shadow: 10px 10px 5px 1px rgba(34, 60, 80, 0.6);
      box-shadow: 10px 10px 5px 1px rgba(34, 60, 80, 0.6);
   }
`

