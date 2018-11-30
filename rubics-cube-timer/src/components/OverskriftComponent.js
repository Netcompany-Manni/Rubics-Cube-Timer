import React from 'react';
import '../style/OverskriftComponentStyling.css';

const overSkriftComponent = (props) =>{
    return(
        <div className='overskriftComponent'>
            <p className='overskriftTekst'>{props.text}</p>
        </div>
    )
}

export default overSkriftComponent