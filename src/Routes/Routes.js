import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home'
import Tips from '../Pages/Tips/Tips'
import Links from '../Pages/Links/Links'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tips" component={Tips} />
        <Route path="/links" component={Links} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
