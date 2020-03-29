import React, {Component} from 'react';

class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.count === 0 && 'There is no count value. Please add'
                }
                <span className={this.getClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.clickHandle}>Increment</button>
            </div>
        );
    }

    getClasses() {
        let classes = 'badge m-2 badge-'
        classes += this.state.count === 0 ? 'warning' : 'success';
        return classes;

    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

}

export default Increment;
