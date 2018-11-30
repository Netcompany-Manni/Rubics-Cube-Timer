import React from 'react';
import '../style/TimerStyling.css';

class Timer extends React.Component{

constructor(props){
    super();
    this.state = {

    }
}

render(){
    return(
        <div className='timerBody'>
        {this.props.text}
        <p>{this.props.timervalue}</p>
        </div>
    )
}

}

export default Timer;