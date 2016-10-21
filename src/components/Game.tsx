import * as React from "react";
import Word from "./Word";
import ConceptBoard from "./ConceptBoard";
import ConceptLibrary from "./ConceptLibrary";
import GuessArea from "./GuessArea";

export default class Game extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { selectedConcepts: [] };
    }

    updateConcepts(newConcepts: number[])
    {
        this.setState({ selectedConcepts: newConcepts });
    }

    render () {
        return (
            <div className="fullSize">
                <Word />
                <ConceptLibrary updateConcepts={(newConcepts: any[]) => this.updateConcepts(newConcepts)} />
                <ConceptBoard selectedConcepts={this.state.selectedConcepts}/>
                <GuessArea />
            </div>
        );
    }
}
