import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Tips from '../Pages/Tips'
import Links from '../Pages/Links'


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
