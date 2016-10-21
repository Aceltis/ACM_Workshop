import * as React from "react";
import {constants} from "../data/constants";

export default class WordGenerator extends React.Component<any, any> {
	constructor (props: any){
		super(props);

		this.state={concepts:constants.words, currentConcept: null, show: true};
	}
    resetting(){
    }
	getConcept(){
    	// get the first word from this.state.concepts
    	// save it in currentConcept
    	// reset show to true
    	//this.setState.concepts;
    	var newConcepts = this.state.concepts;
        var i = newConcepts.shift();
        
        newConcepts.push(i);
        
        this.setState({concepts: newConcepts, currentConcept:i, show: true});         
	}

	hide(){
       this.setState({show: false});
	}
	    render () {
	    	var text = this.state.currentConcept;
            if(!this.state.show)
            {
            	text = "";
            }
            
        return (
            <div className= "row">
                <button type="button" className="btn btn-warning col-md-1" onClick={() => this.resetting()}>MasterReset</button>
                <button type="button" className="btn btn-success col-md-3" onClick={() => this.getConcept()}>Get Concept</button>
                <div type="text" className="form-control">
                    {text}
                </div>
                <button  type="button" className="btn btn-primary col-md-1" onClick={() => this.hide()}>Hide</button>
            </div>
        );
    }

}
