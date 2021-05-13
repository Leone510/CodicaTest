import React from 'react';

export const InputWrapper = ({children, label, error}) => {
   return (
      <label>
         <h3>{label}</h3>
         {children}
         <h4 className="error">
            {!!error ? error : " "}
         </h4>
      </label>
   )
}