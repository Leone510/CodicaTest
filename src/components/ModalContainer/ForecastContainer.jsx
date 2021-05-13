import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { useSetForecast } from "../../custom/useSetForecast/useSetForecast";
import { ForecastCloseBtn } from "../Button/ForecastCloseBtn";
import { forecastThunk } from "./forecastThunk";
import { StyledModalContainer } from "./StyledModalContainer";

export const ForecastContainer = () => {
   const { cityName } = useParams();
   const history = useHistory();
   const dispatch = useDispatch();
   const {cityList, forecast} = useSelector(store => store.city);
   const currentCity = cityList.find(city => city.name === cityName);
   const data = useSetForecast(forecast);

   useEffect(() => {

      dispatch(forecastThunk(currentCity));

   }, [currentCity, dispatch])

   const toHome = () => history.push(`/cityes`);

   return (
      <StyledModalContainer>
         {
            (data === undefined) ?
            <h2>Loading...</h2> :

            <div className="currentBox">
               <div className="forecastHeader">
                  <h2>{currentCity.name}</h2>
                  <ForecastCloseBtn onClick={toHome}/>
               </div>

               <div className="forecastInfo">
                  <h3>Weather: {data.weather}</h3>
                  <h3>Temperatere: {data.temp}</h3>
                  <h3>Temperatere feels: {data.feelsTemp}</h3>
                  <h3>Sunrise at: {data.sunrise}</h3>
                  <h3>Sunset at: {data.sunset}</h3>
                  {/* <h3>Speed of wind: {data.wind.speed}</h3>
                  <h3>Gusts of wind: {data.wind.gust}</h3> */}
                  <h3>visibility: {data.visibility}</h3>
                  <h3>pressure: {data.pressure}</h3>
                  <h3>humidity: {data.humidity}</h3>
               </div>

               <div className="forecastIcon">
                  {data.icon}
               </div>

               {data.hourlyTemp}

            </div>

         }
      </StyledModalContainer>
   )
}