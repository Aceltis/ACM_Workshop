import * as React from "react";
import Word from "./Word";
import ConceptBoard from "./ConceptBoard";
import ConceptLibrary from "./ConceptLibrary";
import GuessArea from "./GuessArea";

export default class Game extends React.Component<any, any> {
    render () {
        return (
            <div className="fullSize">
                <Word />
                <ConceptLibrary />
                <ConceptBoard />
                <GuessArea />
            </div>
        );
    }
}
