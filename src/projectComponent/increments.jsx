import React, {Component} from 'react';
import Increment from "./increment";

class Increments extends Component {

    render() {
        console.log('Increments rendering')
        const {onReset, onDelete, counters, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <button className="btn btn-secondary btn-sm m-2" onClick={onReset}>Reset</button>
                {
                    counters.map(counter => (
                            <Increment
                                key={counter.id}
                                counter={counter}
                                onDelete={onDelete}
                                onIncrement={onIncrement}
                                onDecrement={onDecrement}
                            >
                            </Increment>

                        )
                    )
                }
            </div>
        );
    }
}

export default Increments;
