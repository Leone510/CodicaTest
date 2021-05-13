import { getCurrentWeather } from "../../api"
import { cityActions } from "../../store/cityes/actionType";

export const refreshThunk = (cityList) => {

   return async dispath => {
      const weatherList = await Promise.all(cityList.map( async city => {

            return (
               await getCurrentWeather(city)
            );

      }));

      dispath(cityActions.refresh(weatherList));
     
   };
}