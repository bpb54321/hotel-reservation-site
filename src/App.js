import React from 'react';
import './App.css';
import {HomePage} from "./pages/Home";
import {RoomsPage} from "./pages/Rooms";
import {SingleRoomPage} from "./pages/SingleRoomPage";
import {ErrorPage} from "./pages/ErrorPage";

function App() {
  return (
    <>
      <HomePage/>
      <RoomsPage/>
      <SingleRoomPage/>
      <ErrorPage/>
    </>
  );
}

export default App;
