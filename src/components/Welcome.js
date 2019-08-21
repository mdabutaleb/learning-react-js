import React, {Component} from 'react'

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return (
            <div>
                <h1>Welcome {this.props.name} and {this.props.heroName}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Welcome;