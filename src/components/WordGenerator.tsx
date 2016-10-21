import * as React from "react";
import {constants} from "../data/constants";

export default class WordGenerator extends React.Component<any, any> {
	constructor (props: any){
		super(props);

		this.state={concepts:constants.words, currentConcept: null, show: true};
	}

    reset(){
        location.reload();
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
            <div className= "container-fluid word">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-warning" onClick={() => this.reset()}>MasterReset</button>
                    <button type="button" className="btn btn-success" onClick={() => this.getConcept()}>Get Concept</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.hide()}>Hide</button>
                </div>
                <span className="text">{text}</span>
            </div>
        );
    }

}
