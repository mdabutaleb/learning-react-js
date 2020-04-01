import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import IncrementApp from "./IncrementApp";
import Movies from "./projectComponent/movies";
import 'font-awesome/css/font-awesome.css'

class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            // <IncrementApp/>

            <Movies/>
        );
    }

}

export default App;
