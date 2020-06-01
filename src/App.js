import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Converter from './Components/Converter/Converter';
import MainPage from './Components/MainPage/MainPage';
import NotFound from './Components/NotFound/NotFound';
import NavigatorMobile from './Components/Header/NavigatorMobile/NavigatorMobile';
import Spacex from './Components/Spacex/Spacex';
const App = () => {
  const [isMobile,setIsMobile] = useState(false)
  useEffect(() => {
    console.log(process.env.REACT_APP_CLIENT_ID); 
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i))
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
