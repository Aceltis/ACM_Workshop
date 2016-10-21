import * as React from "react";
import Word from "./Word";
import ConceptLibrary from "./ConceptLibrary";
import Board from "./Board";
import GuessArea from "./GuessArea";

export default class Game extends React.Component<any, any> {
    render () {
        return (
            <div className="fullSize">
                <Word />
                <ConceptLibrary />
                <Board />
                <GuessArea />
            </div>
        );
    }
}
