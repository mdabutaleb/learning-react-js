import React, {Component} from 'react';

class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
    }

    clickHandle = () => {
        this.setState({
            value: this.state.value + 1,
        })
    }


    render() {
        return (
            <div style={{border: '1px solid gray', padding: '5px'}}>
                {this.props.children}

                <span className={this.getClasses()}>{this.formatvalue()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.clickHandle}>Increment</button>
                <button className="btn btn-danger btn-sm" onClick={() =>  this.props.onDelete(this.props.id)}>Delete</button>

            </div>
        );
    }

    getClasses() {
        let classes = 'badge m-2 badge-'
        classes += this.state.value === 0 ? 'warning' : 'success';
        return classes;

    }

    formatvalue() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }

}

export default Increment;
