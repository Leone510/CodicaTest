import React from 'react';
import { Redirect } from 'react-router';

import { Header } from '../components/Header.jsx/Header';
import { ForecastContainer } from '../components/ModalContainer/ForecastContainer';
import { DeleteContainer } from '../components/ModalContainer/DeleteContainer';
import { CityList } from './CityList/CityList';

export const appRouteMap = {
   cityes: {
      path: '/cityes',
      component: [
         <Header key="header"/>,
         <CityList key="cityList"/>
      ],
   },

   delete: {
      path: '/delete/:deleteCity',
      component: [
         <DeleteContainer key="modalContainer"/>,
         <Header key="header"/>,
         <CityList key="cityList"/>,
      ]
   },

   current: {
      path: '/forecast/:cityName',
      component: [
         <ForecastContainer key="currentContainer"/>,
         <Header key="header"/>,
         <CityList key="cityList"/>,
      ]
   },

   default: {
      path: '*',
      component: <Redirect to={'/cityes'}/>
   },

}