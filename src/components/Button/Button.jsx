import React from 'react';
import {StyledButton} from './StyledButton';

export const Button = ({children, ...props}) => {
   return (
      <StyledButton {...props} >{children}</StyledButton>
   )
}