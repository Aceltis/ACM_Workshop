import * as React from "react";

export default class ConceptBoard extends React.Component<any, any> {
    render () {
        var selectedConcepts = this.props.selectedConcepts;
        var conceptBoxNodes:any = [];
        
        //create a row of boxes
        for(var i=0; i < selectedConcepts.length; i++) {
            conceptBoxNodes.push (
                    <ConceptBox index={selectedConcepts[i]} eye={i}/>
                );
        }       
 
        return (
            //return the row of boxes
            <div className="row board">
            {conceptBoxNodes}
            </div>
        );
    }
}
class ConceptBox extends React.Component<any, any> {
    render () {
    	var index = this.props.index;
        //build a thumbnail object     
        return (       
              <div className="col-md-2">
                <div className="thumbnail">
                  <img src={'src/images/image' + index + ".png" } alt={index}/>
                  <div className="caption">
                    <ConceptBoxDeatils eye={this.props.eye}/>
                  </div>
                </div>  
              </div>       		
        );
    }
}

class ConceptBoxDeatils extends React.Component<any, any> {
    
	constructor(props:any) {
		super(props);
		this.state = {numberOfTokens:1};
	}

	increment() {
        if(this.state.numberOfTokens < 5) {
		  this.setState({numberOfTokens: this.state.numberOfTokens + 1});
        }
	}
	decrement() {
		if(this.state.numberOfTokens > 0 ) {
		  this.setState({numberOfTokens: this.state.numberOfTokens - 1});
        }
	}
    render () {   
        //first thing in the list is primary 
        if(this.props.eye == 0){
            var color = "bg-primary";
        } else {
            var color = "bg-info";
        }
        
        return (
            //build the row of controls
            <p>
             <div className={color}> This is the color </div>
             <a type="button" className="btn btn-default" onClick={() => this.decrement()}> 
                <span className="glyphicon glyphicon-minus" aria-hidden="true"></span>
             </a> 
             <span>   {this.state.numberOfTokens}   </span>
             <a type="button" className="btn btn-default" onClick={() => this.increment()}>
                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
             </a> 
            </p>
        );
    }
    
}

