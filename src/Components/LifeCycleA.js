import React, {Component} from 'react';
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Google'
        }
        console.log('LifeCycleA - Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA - get Derived State From Props')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleA - Component Did Mount')
    }

    // asking component will update or not return true means will update false means not will update
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('LifeCycleA - shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA - getSnapshotBeforeUpdate')
        return null;
    }

    // load after update the component
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifeCycleA - componentDidUpdate');
    }

    changeComponent = () => {
        this.setState({
            name: 'Sumon Mahmud'
        })
    }

    render() {
        console.log('LifeCycleA - Render')
        return (
            <div>
                <p>Content of lifecycle A ({this.state.name})</p>
                <button onClick={this.changeComponent}>Change Component</button>
                <LifeCycleB/>
            </div>
        );
    }
}

export default LifeCycleA;
