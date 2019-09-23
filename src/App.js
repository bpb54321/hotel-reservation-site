import React, {useEffect, useState} from 'react';
import './App.css';
import {HomePage} from "./pages/Home";
import {RoomsPage} from "./pages/Rooms";
import {SingleRoomPage} from "./pages/SingleRoomPage";
import {ErrorPage} from "./pages/ErrorPage";
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {getScreenWidthZone, WindowWidthZoneContext} from "./context/WindowWidthZoneContext";

function App() {

  const [screenWidthZone, setScreenWidthZone] = useState(getScreenWidthZone());

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidthZone(getScreenWidthZone());
    });

    setScreenWidthZone(getScreenWidthZone());
  }, []);

  return (
      <BrowserRouter>
        <WindowWidthZoneContext.Provider value={screenWidthZone}>
          <Navbar/>
          <Switch>
            <Route path={"/"} exact component={HomePage}/>
            <Route path={"/rooms/"} exact component={RoomsPage}/>
            <Route path={"/rooms/:slug/"} component={SingleRoomPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </WindowWidthZoneContext.Provider>
      </BrowserRouter>
  );
}

export default App;
