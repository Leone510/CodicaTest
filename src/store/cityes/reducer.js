const initState = {
   cityList: (
      (localStorage.getItem('cityes')) === null ? 
      [] :
      JSON.parse(localStorage.getItem('cityes'))
   ),
   weather: [],
   forecast: {
      current: {},
      hourly: null,
   },
}

const storeControl = {
   ADD_CITY: (state, payload) => {
      if (state.cityList === null) {
         return {
            ...state,
            cityList: [payload],
         }
      }

      return {
         ...state,
         cityList: [...state.cityList, payload],
      }
   },

   SET_FORECAST: (state, payload) => {

      return {
         ...state,
         forecast: {...payload},
      }
   },

   DELETE_CITY: (state, payload) => {

      const newList = state.cityList.filter(city => {
         return city.name !== payload;
      })

      return {
         ...state,
         cityList: [...newList]
      }
   },

   REFRESH: (state, payload) => {

      return {
         ...state,
         cityList: payload,
      }
   }
}

const reducer = (state = initState, action) => {
   const {type, payload} = action;
   if (!(type in storeControl)) return state;
   return storeControl[type](state, payload);
}

export default reducer;