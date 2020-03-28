import React, {Component} from 'react';
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sumon',
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Sumon Mahmu',
            })
        }, 2000)
    }



    render() {
        console.log('-----------Parent component loading------------')
        return (
            <div>
                <p>This is Main Component</p>
                {/*<RegComp name={this.state.name}/>*/}
                {/*<PureComp name={this.state.name}/>*/}
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;
