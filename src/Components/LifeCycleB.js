import React, {Component} from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sumon'
        }
        console.log('Life Cycle B - Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life Cycle B - get Derived State From Props')
        return null;
    }

    componentDidMount() {
        console.log('Life Cycle B - Component Did Mount')
    }

    render() {
        console.log('Life Cycle B - Render')
        return (
            <div>
                <p>Content of lifecycle B</p>
            </div>
        );
    }
}

export default LifeCycleB;
