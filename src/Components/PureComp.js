import React, {Component, PureComponent} from 'react';

class PureComp extends PureComponent {
    render() {
        // console.log('Pure component loading')
        return (
            <div>
                <p>This is Pure Component({this.props.name})</p>
            </div>
        );
    }
}

export default PureComp;
