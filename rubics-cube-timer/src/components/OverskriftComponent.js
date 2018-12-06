import React from 'react';
import '../style/OverskriftComponentStyling.css';
var timerIsRunningText;
const overSkriftComponent = (props) =>{
    
    timerIsRunningText = props.isRunning ? "Timer is running" : "Timer has stopped";
    return(
        <div className='overskriftComponent'>
            <p className='overskriftTekst'>{props.text}</p>
            <p>{timerIsRunningText}</p>
        </div>
    )
}

export default overSkriftComponent;