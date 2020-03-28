import React, {Component} from 'react';

class RegComp extends Component {

    render() {
        console.log('Regular component loading')
        return (
            <div>
                <p>This is Regular Component({this.props.name})</p>
            </div>
        );
    }
}

export default RegComp;
