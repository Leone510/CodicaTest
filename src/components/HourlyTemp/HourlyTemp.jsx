import React from 'react';
import { StyledHour } from '../Hour/styled';
import {StyledHourlyTemp} from './styled';

export const HourlyTemp = ({coord}) => {
   return (
      <StyledHourlyTemp>
         {coord.map(data => {
            return (

               <StyledHour key={data.x} coord={data}>
                  {data.temp}
               </StyledHour>

            )
         })}
      </StyledHourlyTemp>
   )
}