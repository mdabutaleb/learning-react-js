import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";

function App() {
    return (
        <div className="App">
            <ClassClick/>
            <FunctionClick/>
            {/*
             <Counter/>
             <Message/>
            <Greet name="Sumon" heroname="Batman">
                <p>This is the child component of Sumon</p>
            </Greet>

            <Welcome name="Sumon" heroname="Batman"/>

            <Hello/>
            */
            }
            {/*<Greet name="Mahmud" heroName="Tom Cruis"/>*/}
            <Welcome name="Mahmud" heroName="Tom C "/>
        </div>
    );
}

export default App;
