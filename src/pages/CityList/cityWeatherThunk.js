import { getCurrentWeather } from "../../api"
import { cityActions } from "../../store/cityes/actionType";

export const cityWeatherThunk = (city) => {

   return async dispath => {
      try {
         const cityWeather = await getCurrentWeather(city);
         dispath(cityActions.addCity(cityWeather))
      } catch (e) {
         
      }
      };
}