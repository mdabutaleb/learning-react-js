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

    handleDelete = (counterId) => {
       const counters = this.state.counters.filter(counter => counter.id !== counterId)
      this.setState({
          counters
      })
    }

    render() {
        return (
            <div>
                {
                    this.state.counters.map(counter => (
                            <Increment key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete}>

                            </Increment>

                        )
                    )
                }
            </div>
        );
    }
}

export default Increments;
