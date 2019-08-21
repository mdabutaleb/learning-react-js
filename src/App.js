import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Counter/>
            <Message/>
            <Hello/>

            <Welcome name="Sumon" heroname="Batman"/>
            <Welcome name="Mahmud" heroName="Tom ">
                <p>This is the children of welcome </p>
            </Welcome>
            <Greet name="Sumon" heroname="Batman">
                <p>This is the child component of Greet</p>
            </Greet>
        </div>
    );
}

export default App;
