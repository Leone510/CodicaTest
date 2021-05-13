import React from "react";
import { Route, Switch } from "react-router";

export const RouterProcessor = ({routeMap}) => {
   return (
      <Switch>
         {
            Object.values(routeMap).map(({component, ...props}) => {
               return (
                  <Route key={props.path} {...props}>
                     {component}
                  </Route>  
               )  
            })
         }
      </Switch>
   )
}