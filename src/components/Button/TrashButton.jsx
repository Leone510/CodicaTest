import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

export const TrashButton = (props) => {
   return (
      <button {...props} title="Delete city" className="trashButton">
         <BsFillTrashFill  size="1.5em" color="FireBrick"/>
      </button>
   )
}