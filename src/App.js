import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Converter from './Components/Converter/Converter';
import MainPage from './Components/MainPage/MainPage';
import NotFound from './Components/NotFound/NotFound';
import NavigatorMobile from './Components/Header/NavigatorMobile/NavigatorMobile';
import Spacex from './Components/Spacex/Spacex';
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
      <Switch >
        <Route exact path= '/' component={MainPage} />
        <Route exact path='/Converter/' component={Converter} />
        <Route exact path ='/SpaceX/' component={Spacex}/>
        <Route component={NotFound} />
      </Switch>
      {
        isMobile === true ?
          <NavigatorMobile/>
        :null
      }
      2
    </div>
  );
}

export default App;
