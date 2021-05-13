export const useLocalStorage = () => {
   const changeCityListLS = (cityes) => {
      const toLS = JSON.stringify(cityes);
      localStorage.setItem('cityes', toLS)
   }

   const getCityListLS = () => {
      const fromLS = localStorage.getItem('cityes');
      return JSON.parse(fromLS);
   }

   return {
      changeCityListLS,
      getCityListLS,
   }
}