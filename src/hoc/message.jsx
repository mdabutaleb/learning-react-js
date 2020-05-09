import React, {Component} from 'react';
import withTollTips from "./withTollTips";

class Message extends Component {
    render() {
        return (
            <div>
                Hello Message
                {this.props.showTollTip && <div>Showing another message</div>}
            </div>
        );
    }
}

export default withTollTips(Message);
