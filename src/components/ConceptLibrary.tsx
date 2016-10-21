import * as React from "react";
import { constants } from "../data/constants";

class ConceptImage extends React.Component<any, any> {
    render() {
        return (
            <div className="col-xs-6 col-md-3">
                <a href="#" className="thumbnail">
                    <img src="../images/image0.png" alt="Image not found" />
                 </a>
            </div>
        );
    }
}

export default class ConceptLibrary extends React.Component<any, any> {
    render () {
        return (
            <div className="container-fluid conceptImages">
                <ConceptImage index={0} />
            </div>
        );
    }
}
