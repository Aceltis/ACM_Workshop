import * as React from "react";

export default class GuessArea extends React.Component<any, any> {
   constructor (props: any){
		super(props);
	}
   stopp(){

   }

   addPlayers(){

   }

    render () {
        return (
            <div className="container-fluid guessArea">

            
            <button type="button" className="btn btn-danger col-md-1" onClick={() => this.stopp()}>Stop</button>
            
            
            <button  type="button" className="btn btn-primary col-md-2" onClick={() => this.addPlayers()}>Add Players</button>
            
            
            </div>
        );
    }
}
