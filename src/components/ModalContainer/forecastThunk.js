import { getTempForecast } from "../../api";
import { cityActions } from "../../store/cityes/actionType";

export const forecastThunk = (coord) => {

   return async dispath => {
      try {
         const cityWeather = await getTempForecast(coord);
         dispath(cityActions.setForecast(cityWeather))
      } catch (e) {

      }
      };
}