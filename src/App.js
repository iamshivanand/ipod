import React from 'react';
import Wheel from './Wheel';
import './App.css';
import ZingTouch from 'zingtouch';
import { counter } from '@fortawesome/fontawesome-svg-core';

class App extends React.Component {

  componentDidMount(){
    var counter=0;
    const container= document.getElementById('container');
    console.log('container',container);
    var activeRegion= ZingTouch.Region(container);

    var childElement= document.getElementById('outer-wheel');
    activeRegion.bind(childElement,'pan',function(event){
      counter++;
      console.log('counter',counter);
    });
    var innerwheel= document.getElementById('inner-wheel');
    innerwheel.onclick= function(){
     console.log('inside');
    }

    }
  
  render(){

    return (
      <div className="App">
        <Wheel/>
      </div>
    );
  }
}

export default App;
