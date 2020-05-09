import React, {Component} from 'react';

function withTollTips(Component) {
    return class WithTollTIps extends Component {
        state = {
            showTollTip: false
        }

        mouseOver = () => this.setState({showTollTip: true});
        mouseOut = () => this.setState({showTollTip: false});

        render() {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                                <Component showTollTip={this.state.showTollTip}/>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    }
}


export default withTollTips;
