import * as React from "react";
import Word from "./Word";
import ConceptImages from "./ConceptImages";
import ConceptBoard from "./ConceptBoard";
import GuessArea from "./GuessArea";

export default class Game extends React.Component<any, any> {
    render () {
        return (
            <div className="fullSize">
                <Word />
                <ConceptImages />
                <ConceptBoard />
                <GuessArea />
            </div>
        );
    }
}
