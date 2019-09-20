import React from 'react';
import './App.css';
import {HomePage} from "./pages/Home";
import {RoomsPage} from "./pages/Rooms";
import {SingleRoomPage} from "./pages/SingleRoomPage";
import {ErrorPage} from "./pages/ErrorPage";
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path={"/"} exact component={HomePage}/>
          <Route path={"/rooms/"} exact component={RoomsPage}/>
          <Route path={"/rooms/:slug/"} component={SingleRoomPage}/>
          <Route component={ErrorPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
