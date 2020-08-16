import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Converter from './Components/Converter/Converter';
import MainPage from './Components/MainPage/MainPage';
import NotFound from './Components/NotFound/NotFound';
import NavigatorMobile from './Components/Header/NavigatorMobile/NavigatorMobile';
import Spacex from './Components/Spacex/Spacex';
import Pokemon from './Components/Pokemon/Pokemon';
import { IsMobile } from './functions/functions';
const App = () => {
  const [isMobile,setIsMobile] = useState(false)
  useEffect(() => {
    if (IsMobile())
        setIsMobile(true);
  }, [])
  return (
    <div className="app">
      <Header />
      {/* <Route render = {({ location }) => ( */}
      <Switch >
        {/* <Switch location = { location }> */}
        <Route exact path='/' component={MainPage} />
        <Route exact path='/Converter/' component={Converter} />
        <Route exact path ='/SpaceX/' component={Spacex}/>
        <Route exact path ='/Pokemon/' component={Pokemon}/>
        <Route component={NotFound} />
      </Switch>
      {/* )} /> */}
      {
        isMobile === true ?
          <NavigatorMobile/>
        :null
      }
    </div>
  );
}

export default App;
