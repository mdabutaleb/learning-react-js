import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Increments from "./projectComponent/increments";
import Increment from "./projectComponent/increment";
import FunctionalIncrement from "./useState/functionalIncrement";

class IncrementApp extends Component {

    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 10},
            {id: 4, value: 0},
        ],
        total: 0,
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
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter}
        counters[index].value--
        this.setState({
            counters
        })

    }

    totalCount = () => {
        const totalCount = this.state.counters.filter(c => c.value > 0).length
        return totalCount;
        // return a;
    }

    componentDidMount() {
        // console.log('Component mounting')
    }


    render() {
        // const {onDelete, onIncrement, onDecrement} = this.state
        return (
            <React.Fragment>
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <Increments
                                counters={this.state.counters}
                                onIncrement={this.handleIncrement}
                                onReset={this.handleReset}
                                onDelete={this.handleDelete}
                                onDecrement={this.handleDecrement}
                            />
                        </div>
                        <div className="col-md-4">
                            <FunctionalIncrement/>
                        </div>

                    </div>


                    {/*<div>*/}
                    {/*    <button className="btn btn-secondary btn-sm m-2" onClick={this.handleReset}>Reset</button>*/}
                    {/*    {*/}
                    {/*        this.state.counters.map(counter => (*/}
                    {/*                <Increment*/}
                    {/*                    key={counter.id}*/}
                    {/*                    counter={counter}*/}
                    {/*                    onDelete={this.handleDelete}*/}
                    {/*                    onIncrement={this.handleIncrement}*/}
                    {/*                    onDecrement={this.handleDecrement}*/}
                    {/*                >*/}
                    {/*                </Increment>*/}

                    {/*            )*/}
                    {/*        )*/}
                    {/*    }*/}
                    {/*</div>*/}
                </div>
            </React.Fragment>
        );
    }

}

export default IncrementApp;
