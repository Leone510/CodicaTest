import React from 'react';
import { HiRefresh } from "react-icons/hi";

export const RefreshButton = (props) => {
   return (
      <button {...props} title="Refresh" className="refreshButton">
         <HiRefresh  size="3em" color="MidnightBlue"/>
      </button>
   )
}