import React, {Component} from 'react';
import Increment from "./increment";

class Increments extends Component {

    render() {
        return (
            <div>
                <button className="btn btn-secondary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
                {
                    this.props.counters.map(counter => (
                            <Increment
                                key={counter.id}
                                counter={counter}
                                onDelete={this.props.onDelete}
                                onIncrement={this.props.onIncrement}
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
