import * as React from "react";
import Word from "./Word";
<<<<<<< HEAD
import ConceptImages from "./ConceptImages";
import ConceptBoard from "./ConceptBoard";
=======
import ConceptLibrary from "./ConceptLibrary";
import Board from "./Board";
>>>>>>> master
import GuessArea from "./GuessArea";

export default class Game extends React.Component<any, any> {
    render () {
        return (
            <div className="fullSize">
                <Word />
<<<<<<< HEAD
                <ConceptImages />
                <ConceptBoard />
=======
                <ConceptLibrary />
                <Board />
>>>>>>> master
                <GuessArea />
            </div>
        );
    }
}
