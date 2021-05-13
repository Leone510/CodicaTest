import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useSetCard } from '../../custom/useSetCard/useSetCard';
import { cityActions } from '../../store/cityes/actionType';
import { TrashButton } from '../Button/TrashButton';
import { StyledCityCard } from './StyledCityCard';

export const CityCard = ({data}) => {
   const {isLoading} = useSelector(store => store.city);
   const history = useHistory();
   const dispatch = useDispatch();
   const {name, temp, weatherIcon, weather, wind} = useSetCard(data);

   const handleDeleteCity = (e) => {
      e.stopPropagation();
      dispatch(cityActions.deleteCity(name));
   }

   return (
      isLoading ? <h2>empty</h2> :

      <StyledCityCard onClick={() => history.push(`/forecast/${name}`)}>
         
         <div className="cardTitle">
            <h2>{name}</h2>
            {weatherIcon}
         </div>
         
         <h3>{`Weather: ${weather}`}</h3>
         <h3>{`Temperature: ${temp} °C`}</h3>
         <h3>{`Wind speed: ${wind} m/s`}</h3>

         <TrashButton onClick={handleDeleteCity}/>
         
      </StyledCityCard>
   )
}