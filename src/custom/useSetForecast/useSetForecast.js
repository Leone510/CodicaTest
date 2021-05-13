import { HourlyTemp } from "../../components/HourlyTemp/HourlyTemp";
import { StyledIconImg } from "../../components/IconImg/styledIconImg";

export const useSetForecast = ({current, hourly}) => {
   if (current.weather === undefined) return {};

   const setTemp = (t) => {
      const result = Math.round(t) > 0 ?
      `+${Math.round(t)}  °C` :
      `${Math.round(t)}  °C`;
      return result;
   }

   const tempColor = (t) => {
      const num = t + 50;

      switch (true) {
         case num < 26 :
            return {r: "0", g: String(num*10), b: "250"};
         
         case num > 25 && num < 51 :
            return {r: "0", g: "250", b: String((num-25)*10)};
            
         case num > 50 && num < 76 :
            return {r: String((num-50)*10), g: "250", b: "0"};
         
         case num > 75 :
            return {r: "250", g: String((num-75)*10), b: "0"};
      }
   }

   const tempConfig = () => {
      const daylyTemps = hourly.slice(0, 24);
      const tempsArr = daylyTemps.map(hour => Math.round(hour.temp));
      const min = Math.min.apply(null, tempsArr);
      const max = Math.max.apply(null, tempsArr);
      const difference = max - min;
      const height = Math.round(200 / (difference));
      const coordinates = tempsArr.map((hour, i) => {
         return {
            x: i * 50 + 25,
            y: Math.round(((hour - min) * difference) + height / 2),
            height: height,
            temp: hour > 0 ? `+${hour}` : `${hour}`,
            color: tempColor(hour),
         }
      })

      return coordinates;
   }
   
   const sunrise = new Date(current.sunrise*1000).toTimeString().split(' ')[0];
   const sunset = new Date(current.sunset*1000).toTimeString().split(' ')[0];
   const temp = setTemp(current.temp);
   const feelsTemp = setTemp(current.feels_like);
   const pressure = current.pressure;
   const humidity = current.humidity;
   const visibility = `${current.visibility} of metrs`
   const wind = {
      speed: `${current.wind_speed} m/s`,
      gust: `${current.wind_gust} m/s`,
   }
   const weather = current.weather[0].description;
   const icon = <StyledIconImg 
      width={'300'} 
      height={'300'}
      alt="weather icon"
      src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
   />

   const hourlyTemp = <HourlyTemp coord={tempConfig()}/> 

   return {
      sunrise,
      sunset,
      temp,
      feelsTemp,
      pressure,
      humidity,
      visibility,
      wind,
      weather,
      icon,
      hourlyTemp,

   }
}