import React from 'react';
import Header from './Header';
import TaskItem from './TaskItem';
import Restaurants from './Restaurants';
import Booking from './Booking';
import "./App.css";



function App() {
  return (

<div class="container">
  <h1 id="mainHeading">FOODERS</h1>
  <p>We help you navigate the ever changing food scene. Your best friend now joined the V-gang? No problem! </p>
  <div class="row">
    <Header />
    <TaskItem />
    <Restaurants />
    <Booking />


    </div>
  </div>
  );
}

export default App;
