import * as React from "react";
import { constants } from "../data/constants";

class ConceptImage extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { selected: false};
    }

    clickHandler() {
        if (!this.state.selected)
            this.props.saveHandler(this.props.index);
        else
            this.props.removeHandler(this.props.index);

        this.setState({ selected: !this.state.selected }); // toggle !
    }

    // () => Anonyous function
    render() {
        var disableClass = this.state.selected ? "disableImage" : "";

        return (
            <div className={disableClass + " conceptImage"}>
                <a href="#" className="thumbnail" onClick={() => this.clickHandler()}> 
                    <img src={"src/images/image"+ this.props.index +".png"} alt="Image not found" />
                </a>
            </div>
        );
    }
}

export default class ConceptLibrary extends React.Component<any, any> {
    public selectedConcepts: number[] = []; // Only exists in typescript

    saveConcept(imageIndex: number) {
        var currentConcepts = this.selectedConcepts;
        currentConcepts.push(imageIndex);
        this.selectedConcepts = currentConcepts;

        //TODO call ConceptBoard(selectedConcepts)
        this.props.updateConcepts(this.selectedConcepts);
    }

    removeConcept(imageIndex: number) {
        var currentConcepts = this.selectedConcepts;
        var i = currentConcepts.indexOf(imageIndex);
        if (i > -1)
        {
            currentConcepts.splice(i, 1);
        }
        this.selectedConcepts = currentConcepts;

        //TODO call ConceptBoard(selectedConcepts)
        this.props.updateConcepts(this.selectedConcepts);
    }

    render() {
        var imageNodes:any[] = [];
        for (let i = 0; i < constants.images; i++) {
            imageNodes.push(< ConceptImage index={i} saveHandler={(id: number) => this.saveConcept(id)} removeHandler={() => this.removeConcept(i)} /> ); 
        }

        return (
            <div className="container-fluid conceptImages">
                <div className="row">
                    {imageNodes}
                </div>
            </div>
        );
    }   
}
