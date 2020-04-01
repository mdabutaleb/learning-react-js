import React, {Component} from 'react';

class Increment extends Component {

    render() {
        const { onDelete, counter, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-1">
                        <span className={this.getBadgesClasses(counter)}>{this.getTotal(counter)}</span>
                    </div>
                    <div className="col-md-2">

                        <button className="btn btn-secondary btn-sm m-1 "
                                onClick={() => onIncrement(counter)}> +
                        </button>

                        <button className="btn btn-secondary btn-sm m-1" disabled={this.getDisabledClass(counter)}
                                onClick={() => onDecrement(counter)}> -
                        </button>

                        <button className="btn btn-danger btn-sm m-1"
                                onClick={() => onDelete(counter.id)}> X
                        </button>
                    </div>

                </div>


            </div>
        );
    }

    getBadgesClasses(counter) {
        let classes = 'badge m-2 badge-'
        classes += counter.value === 0 ? 'warning' : 'success';
        return classes;

    }

    getDisabledClass(counter) {
                return counter.value === 0 ? true : '';
    };

    getTotal(counter) {

        return counter.value === 0 ? 'Zero' : counter.value;
    }

}

export default Increment;
