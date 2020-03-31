import React, {Component} from 'react';
import Increment from "./increment";

class Increments extends Component {

    constructor() {
        super();
        this.state = {
            counters: [
                {id: 1, value: 4},
                {id: 2, value: 0},
                {id: 3, value: 10},
                {id: 4, value: 0},
            ]
        }
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({
            counters
        })
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId)
        this.setState({
            counters
        })
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value++
        this.setState({
            counters
        })

    }

    render() {
        return (
            <div>
                <button className="btn btn-secondary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                {
                    this.state.counters.map(counter => (
                            <Increment
                                key={counter.id}
                                counter={counter}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement}
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
