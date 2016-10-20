import * as React from "react";
import Alert from "./components/Alert";
import Game from "./components/Game";

export default class Layout extends React.Component<any, any> {
    constructor (props: any) {
        super(props);

        this.state = {
            alert: false
        }
    }

    render () {
        var alert = this.state.alert ? <Alert /> : null;
        return (
            <div className="fullSize">
                {alert}
                <Game />
            </div>
        );
    }
}
