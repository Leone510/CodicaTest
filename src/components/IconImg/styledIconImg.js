import styled from "styled-components";

export const StyledIconImg = styled.img`
   object-fit: cover;

   ${props => {
      return (`
         width: ${props.width}px;
         height: ${props.height}px;
      `)
   }}
`