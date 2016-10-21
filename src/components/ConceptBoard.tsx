import * as React from "react";
														//inout would be list of selected input
export default class ConceptBoard extends React.Component<any, any> {
    render () {
    	var details = {index: 15, main: true};

        return (

            // use state to show if selected
            // create a concept image and concept image details together
            //TODO loop over array to make multiple boxes
            <div>
				<ConceptBox index={details.index} main={details.main}/>         
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
            <div>           			
				<img src={'src/images/image' + index + ".png" } />
				<ConceptBoxDeatils category={main}/>          
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
            <div>
	         <div color={this.props.color}> </div>
	         <button type="button" className="btn btn-default" onClick={() => this.decrement()}> Minus</button> 
	         <div>{this.state.numberOfTokens}</div>
	         <button type="button" className="btn btn-default" onClick={() => this.increment()}> Plus</button> 

            </div>
        );
    }
}

