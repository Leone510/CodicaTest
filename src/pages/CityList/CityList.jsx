import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CityCard } from '../../components/CityCard/CityCerd';
import { refreshThunk } from './refreshThunk';
import { StyledCityList } from './StyledCityList';

export const CityList = () => {
   const {cityList} = useSelector(store => store.city);
   const dispatch = useDispatch();

   useEffect(() => {
      const cityes = cityList.map(city => city.name)

      dispatch(refreshThunk(cityes))
   }, [])

   return (

      cityList.length === 0 ? 
         <StyledCityList>
            <h2>City list is empty</h2>
         </StyledCityList> :

      <StyledCityList>

         {cityList.map(city => {
            return <CityCard key={city.id} data={city}/>
         })}
    
      </StyledCityList>

   )
}