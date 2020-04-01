import React, {Component} from 'react';

class Increment extends Component {


    render() {
        return (
            <div style={{border: '1px solid gray', padding: '5px'}}>

                <span className={this.getClasses()}>{this.formatvalue()}</span>
                <button className="btn btn-secondary btn-sm"
                        onClick={() => this.props.onIncrement(this.props.counter)}>Increment
                </button>
                <button className="btn btn-danger btn-sm"
                        onClick={() => this.props.onDelete(this.props.counter.id)}>Delete
                </button>

            </div>
        );
    }

    getClasses() {
        let classes = 'badge m-2 badge-'
        classes += this.props.counter.value === 0 ? 'warning' : 'success';
        return classes;

    }

    formatvalue() {
        const value = this.props.counter.value;
        return value === 0 ? 'Zero' : value;
    }

}

export default Increment;
