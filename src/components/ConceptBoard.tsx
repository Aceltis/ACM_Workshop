import * as React from "react";
														//inout would be list of selected input
export default class ConceptBoard extends React.Component<any, any> {
    render () {
    	var details = [{index: 15, main: true}, {index: 16, main: false}, {index: 17, main: false}];
        //var conceptBoxNodes = this.props.data.map(function(*list?*) { });
        var conceptBoxNodes:any = [];
        for(var i=0; i < details.length; i++) {
            conceptBoxNodes.push (
                    <ConceptBox index={details[i].index} main={details[i].main}/>         
                );
        }       
 
        return (
            <div className="row">
            {conceptBoxNodes}
            </div>
        );
    }
}

class ConceptBox extends React.Component<any, any> {

    render () {
    	//TODO: STATUS WILL BE HERE
    	var index = this.props.index;
    	var main = this.props.main;
        return (
        	 // use state to show if selected
            // create a concept image and concept image details together
            
              <div className="col-md-2">
                <div className="thumbnail">
                  <img src={'src/images/image' + index + ".png" } alt={index}/>
                  <div className="caption">
                    <ConceptBoxDeatils category={main}/>
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
		//TODO not bigger than 5
		this.setState({numberOfTokens: this.state.numberOfTokens + 1});
	}
	decrement() {
		// no less then 1
		this.setState({numberOfTokens: this.state.numberOfTokens - 1});
	}

    //this needs a color, a button, a number to display, and a button
    //state: color, and the number
    //TODO: make onClick methods for buttons
    render () {
    	//TODO: there will be a state here
        return (
            <p>
             <div color={this.props.color}> This is the color </div>
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

