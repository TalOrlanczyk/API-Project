import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Converter from './Components/Converter/Converter';
import MainPage from './Components/MainPage/MainPage';
import NotFound from './Components/NotFound/NotFound';

const App = () => {
  // useEffect(()=> {
  //   const element = document.getElementById("API");
  //   element.classList.add("lightmode");
  // },[])
  return (
    <div className="app">
      <Header/>
      {/* <Route render = {({ location }) => ( */}
             <Switch >
             {/* <Switch location = { location }> */}
                <Route exact path = '/' component={MainPage} />
                <Route exact path = '/Converter/' component={Converter} />
                <Route component={NotFound}/>
              </Switch>
       {/* )} /> */}
    </div>
  );
}

export default App;
