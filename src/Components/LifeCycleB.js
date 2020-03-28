import React, {Component} from 'react';

class LifeCycleB extends Component {

    // Call the constructor very first when load a component
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sumon'
        }
        console.log('Life Cycle B - Constructor')
    }

// 2nd
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB - get Derived State From Props')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleB - Component Did Mount')
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycleB - shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB - getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleB - componentDidUpdate');
    }

    render() {
        console.log('LifeCycleB - Render')
        return (
            <div>
                <p>Content of lifecycle B</p>
            </div>
        );
    }
}

export default LifeCycleB;
