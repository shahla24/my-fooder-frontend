import React from 'react';
import Header from './Header';
import TaskItem from './TaskItem';
import Restaurants from './Restaurants';
import Booking from './Booking';
import "./App.css";
import Icon from 'react';
import { render } from '@testing-library/react';


function App() {

  render()
  {
  
  
  return (

<div class="container">
  <h1 id="mainHeading">FOODERS</h1>
  <p>We help you navigate the ever changing food scene. Your best friend now joined the V-gang? No problem! </p>
  <p>Your cousin has recently been diagnosed with coeliac? You only eat fish?</p>
  <p>FOODERS are especially for you</p>
  <div class="row">
    <Header />
    <TaskItem />
    <Restaurants />
    <Booking />
    <Icon />

    </div>
  </div>
  
  
  
  );
 } ;
}

export default App;
