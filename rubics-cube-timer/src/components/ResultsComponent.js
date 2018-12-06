import React from 'react';
import '../style/ResultsComponentStyling.css';
import SingleResultComponent from  './SingleResultComponent.js';
class ResultsComponent extends React.Component{

    constructor(props){
        super();
        this.state = {
            listOfResults : []
        }
    }

    render(){
        return (
            <div id="result_component_list">
                {this.props.listOfResults.map((singleResult, index)=>{
                    return <div> 
                        <SingleResultComponent tekst={singleResult}></SingleResultComponent>
                         
                    </div>
                })}
             </div>
        )
    }

}

export default ResultsComponent;