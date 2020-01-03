import React from 'react';
import Header from './Header';
import TaskItem from './TaskItem';
import Restaurants from './Restaurants';
import Booking from './Booking';
import vegan from './vegan.jpeg';
import hala from './hala.jpeg';
import glutenfree from './glutenfree.png';
import vegetarian from './vegetarian.jpeg';
import pesca from './pesca.png';
import "./App.css";
//import Icon from 'react';
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
    <div class="col-sm">
    <img src={hala} alt="halal" class="rounded-circle" />
    <br/>
    Halal
      <div class="input">
      <input type="checkbox" />
    </div>
    </div>
    <div class="col-sm">
    <img src={pesca} alt="Pescatarian" class="rounded-circle" />
    <br/>
      Pescatarian
      <div class="input">
      <input type="checkbox" />
    </div>
    </div>
    <div class="col-sm">
    <img src={glutenfree} alt="Gluten Free" class="rounded-circle"></img>
    <br/>
      Gluten Free
      <div class="input">
      <input type="checkbox" />
    </div>
  </div>
  <br />
  <br />
    <div class="container">
    <div class="row">
      <div class="col">
      <img src={vegan} alt="vegan" class="rounded-circle" />
      <br />
        Vegan
        <div class="input">
        <input type="checkbox" />
        </div>
      </div>
      <div class="col">
      <img src={vegetarian} alt="vegaetarian" class="rounded-circle" />
      <br />
        vegetarian
        <div class="input">
        <input type="checkbox" />
        </div>
      </div>
    </div>
    <br />
    <button type="button" class="btn btn-primary btn-lg">SUBMIT</button>
  </div>
  


    <Header />
    <TaskItem />
    <Restaurants />
    <Booking />
  

    </div>
  
  </div>
  
  
  );
 } ;
}

export default App;
