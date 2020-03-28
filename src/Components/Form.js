import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: '',
            hobby: 'vue'
        }
    }

    usernameChange = event => {
        this.setState({
            username: event.target.value,
        });
    }
    commentChange = event => {
        this.setState({
            comment: event.target.value,
        });
    }

    formSubmitHandler = event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.hobby}`)
        event.preventDefault();
    }

    render() {
        let {username, comment, hobby} = this.state
        return (
            <div>
                <p>simple paragraph</p>
                <form onSubmit={this.formSubmitHandler}>
                    <div>
                        <label>Name</label>
                        <input type="text" value={username} onChange={this.usernameChange}/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea onChange={this.commentChange} value= {comment}/>
                    </div>
                    <div>
                        <label>Hobby</label>
                        <select value={hobby}>
                            <option value="react">React Js</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
