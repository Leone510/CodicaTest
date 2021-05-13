import React from 'react';
import {IoMdCloseCircleOutline} from "react-icons/io"

export const ForecastCloseBtn = (props) => {
   return (
      <button {...props} title="Close" className="closeBtn">
         <IoMdCloseCircleOutline size="2em" color="blue"/>
      </button>
   )
}