import { StyledIconImg } from "../../components/IconImg/styledIconImg";

export const useSetCard = (data) => {
   const name = data.name;

   const temp = Math.round(data.main.temp) > 0 ?
      `+${Math.round(data.main.temp)}` :
      Math.round(data.main.temp);

   const weatherIcon = <StyledIconImg 
      width={'100'} 
      height={'60'}
      alt="weather icon"
      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
   />;

   const weather = data.weather[0].description;

   const wind = data.wind.speed;

   return {
      name,
      temp,
      weatherIcon,
      weather,
      wind,
   }
}