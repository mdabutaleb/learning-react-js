import React, {Component} from 'react';
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sumon'
        }
        console.log('Life Cycle A - Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Life Cycle A - get Derived State From Props')
        return null;
    }

    componentDidMount() {
        console.log('Life Cycle A - Component Did Mount')
    }

    render() {
        console.log('Life Cycle A - Render')
        return (
            <div>
                <p>Content of lifecycle A</p>
                <LifeCycleB/>
            </div>
        );
    }
}

export default LifeCycleA;
