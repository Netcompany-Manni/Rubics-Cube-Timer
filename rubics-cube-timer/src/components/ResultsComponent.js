import React from 'react';
import '../style/ResultsComponentStyling.css';

class ResultsComponent extends React.Component{

    constructor(props){
        super();
        this.state = {
            listOfResults : []
        }
    }


    render(){
        return(
            <div>
                <p>Her kommer resultatene</p>
            </div>
        )
    }

}

export default ResultsComponent;