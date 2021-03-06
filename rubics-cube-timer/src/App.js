import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OverskriftComponent from './components/OverskriftComponent.js';
import TimerComponent from './components/TimerComponent.js';
import ResultsComponent from './components/ResultsComponent.js';

class App extends Component {
  
constructor(props){

  super();
  this.state = {
    timerIsRunning : false,
    timerStartValue: 0,
    timerValue : 0,
    listOfResults : []
  }
  this.handlekeyPress.bind(this);
  
}

økTiden = () =>{
  this.setState({timerValue : this.state.timerValue+1}, () =>{
    console.log(this.state.timerValue)
  })
}



startTimer(){

  this.setState({timerValue : 0})
  this.timer = setInterval(
    () => this.økTiden(),
    1000
    );
}


stopTimer() {
  clearInterval(this.timer);
  {/* Legge til resultatene i et array som vises*/}
  this.addResultToList();
}

toggleTimer = () =>{

  if(this.state.timerIsRunning){
    this.setState({timerIsRunning : false}, () =>{
      console.log('Timer is running is ' +this.state.timerIsRunning);
   this.stopTimer();
    })
  }
  else{
    this.setState({timerIsRunning : true}, () =>{
      console.log('Timer is running is ' +this.state.timerIsRunning)
      this.startTimer();
    })
  }
}

handlekeyPress = (e) =>{
  e.preventDefault();
  if(e.key == ' '){ {/* Found solution for this at https://github.com/facebook/react/issues/5809*/}
    console.log('Space pressed');
    this.toggleTimer();

  } else {
    console.log('Didnt recognize');
  }
}

addResultToList = () =>{
  this.setState({ listOfResults: this.state.listOfResults.concat(this.getTimeSpentBetweenStartAndTime()) }) 
  {/* Will add a number to the array, which is amount of time spent. Can be fixed to work with milliseconds? */}
}

getTimeSpentBetweenStartAndTime = () =>{
  if(!this.state.timerIsRunning){ {/* If the timer is not running, we can get the time. */}
  return this.state.timerValue - this.state.timerStartValue;
  }
  else{
    console.log('You can not get the time, while the timer is running fam');
  }
}

  render() {
    return (
      <div className="App" onKeyUp={this.handlekeyPress.bind(this)} tabIndex="0"> {/* Found solution with tabIndex at https://stackoverflow.com/questions/43503964/onkeydown-event-not-working-on-divs-in-react*/}
     
        <OverskriftComponent text="Velkommen!" isRunning={this.state.timerIsRunning}></OverskriftComponent>
        <br></br>
      <TimerComponent text="kldjas" timervalue={this.state.timerValue}></TimerComponent>
      <ResultsComponent listOfResults={this.state.listOfResults}></ResultsComponent>
      </div>
    );
  }


}

export default App;
