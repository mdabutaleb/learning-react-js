import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Increments from "./projectComponent/increments";
import Navbar from "./projectComponent/navbar";

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App constructor');
    }


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
        console.log('Component mounting')
    }


    render() {
        console.log('App rendering')
        return (
            <React.Fragment>
                <Navbar totalCount={this.totalCount()}/>
                <div className="container">
                    <Increments
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                    />
                </div>
            </React.Fragment>
        );
    }

}

export default App;
