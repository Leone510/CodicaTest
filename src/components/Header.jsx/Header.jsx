import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputWrapper } from '../InputWrapper/InputWrapper';
import {StyledHeader} from './StyledHeader';
import {StyledInput} from '../Input/StyledInput';
import { Button } from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalStorage } from '../../custom/useLocalStorage/useLocalStorage';
import {cityWeatherThunk} from '../../pages/CityList/cityWeatherThunk';
import { RefreshButton } from '../Button/RefreshButton';
import { refreshThunk } from '../../pages/CityList/refreshThunk';
import { useHistory } from 'react-router';

const schema = yup.object().shape({
   city: yup
            .string()
            .strict(true)
            .required('City name is required'),
 });

export const Header = () => {
   const dispatch = useDispatch();
   const cityes = useSelector(store => store.city.cityList);
   const {changeCityListLS} = useLocalStorage();
   const {register, handleSubmit, reset, formState: { errors }} = useForm({
      resolver: yupResolver(schema)
   });

   useMemo(() => {
      changeCityListLS(cityes);
   }, [changeCityListLS, cityes]);

   const handleCityAdd = async ({city}) => {
      reset();
      await dispatch(cityWeatherThunk(city));
   }

   const handleRefresh = async () => {
      const cityList = cityes.map(city => city.name)

      await dispatch(refreshThunk(cityList))
   }

   return (
      <StyledHeader>

         <form 
            className="findCytyForm" 
            onSubmit={handleSubmit(handleCityAdd)}
         >

            <InputWrapper label="Add city" error={errors.city?.message}>

               <StyledInput 
                  {...register("city")} 
                  type="text" 
                  placeholder="Enter city to search..." 
                  name="city"
               />

               <Button type="submit">Search...</Button>

            </InputWrapper>

         </form>

         <RefreshButton onClick={handleRefresh}/>

      </StyledHeader>
   )
}