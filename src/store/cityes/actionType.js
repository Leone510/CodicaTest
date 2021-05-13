const actionTypes = {
   ADD_CITY: 'ADD_CITY',
   PRELOAD_ON: 'PRELOAD_ON',
   SET_FORECAST: 'SET_FORECAST',
   DELETE_CITY: 'DELETE_CITY',
   REFRESH: 'REFRESH',
}

export const cityActions = {
   addCity: (payload) => ({type: actionTypes.ADD_CITY, payload}),
   preloadOn: () => ({type: actionTypes.PRELOAD_ON}),
   setForecast: (payload) => ({type: actionTypes.SET_FORECAST, payload}),
   deleteCity: (payload) => ({type: actionTypes.DELETE_CITY, payload}),
   refresh: (payload) => ({type: actionTypes.REFRESH, payload}),
}