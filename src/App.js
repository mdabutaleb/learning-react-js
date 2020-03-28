import React, {Fragment} from 'react';
import './App.css';
// import Hello from "./Components/Hello";
// import Welcome from "./Components/Welcome";
// import Message from "./Components/Message";
// import Counter from "./Components/Counter";
// import FunctionClick from "./Components/FunctionClick";
// import ClassClick from "./Components/ClassClick";
// import EventBinding from "./Components/EventBinding";
// import EventBindingPractice from "./Components/EventBindingPractice";
// import ParentComponent from "./Components/ParentComponent";
// import HomePage from "./Components/practice/HomePage";
// import UserGreeting from "./Components/UserGreeting";
// import NameList from "./Components/nameList";
// import Stylesheet from "./Components/Stylesheet";
// import Inline from "./Components/inline";
// import "./appStyles.css";
// import style from "./appStyles.module.css";
// import Form from "./Components/Form";
// import LifeCycleA from "./Components/LifeCycleA";
import FragmentDemo from "./Components/FragmentDemo";
import ParentComp from "./Components/ParentComp";

function App() {
    return (
        <div className="App">
            <ParentComp/>


            {/*<FragmentDemo/>*/}

            {/*<LifeCycleA/>*/}

            {/*<Form/>*/}


            {/*<h1 className="success">Success</h1>*/}
            {/*<h2 className={style.error}>Error</h2>*/}
            {/*<Inline/>*/}
            {/*<Stylesheet primary={true}/>*/}
            {/*<NameList/>*/}
            {/*<UserGreeting/>*/}

            {/*<ParentComponent/>*/}

            {/*<HomePage/>*/}

            {/*<EventBindingPractice/>*/}
            {/*<EventBinding/>*/}
            {/*<FunctionClick/>*/}
            {/*<ClassClick/>*/}


            {/*<Counter/>*/}


            {/*<Message/>*/}


            {/*Functional component*/}
            {/*<Hello name="Google" branch="Canada">*/}
            {/*    <p>THis is a paragraph need to incorporate in the main component</p>*/}
            {/*</Hello>*/}
            {/*<Hello name="Yahoo" branch="India">*/}
            {/*    <button>Action</button>*/}
            {/*</Hello>*/}
            {/*<Hello name="Bing" branch="Dhaka">*/}
            {/*    <h3>Something</h3>*/}
            {/*</Hello>*/}


            {/*Class components*/}
            {/*<Welcome name="Google" branch="USA"/>*/}
            {/*<Welcome name="Yahoo" branch="India"/>*/}
            {/*<Welcome name="BIng" branch="Bangladesh"/>*/}
        </div>
    );
}

export default App;
