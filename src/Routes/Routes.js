import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Tips from '../Pages/Tips'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tips" component={Tips} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
