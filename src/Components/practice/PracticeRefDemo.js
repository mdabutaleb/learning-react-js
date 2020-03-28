import React, {Component} from 'react';

class PracticeRefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.CbRef = null;
        this.setCbRef = element =>{
            this.CbRef = element;
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus();
        if (this.CbRef){
            this.CbRef.focus();
        }
    }

    buttonHandler = () => {
        // alert(this.inputRef.current.value);
        alert(this.CbRef.value)
    }

    render() {
        return (
            <div>
                {/*<input type="text" ref={this.inputRef}/>*/}
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.buttonHandler}>Click</button>
            </div>
        );
    }
}

export default PracticeRefDemo;
