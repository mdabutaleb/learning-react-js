import React, {Component} from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: {
                username: '',
                password: ''

            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({account})
    }

    render() {
        const {account} = this.state;
        return (

            <div className="col-md-4 offset-4 mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input className="form-control" id="username" placeholder="Username"
                               value={account.username}
                               name="username"
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               value={account.password}
                               name="password"
                               onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
