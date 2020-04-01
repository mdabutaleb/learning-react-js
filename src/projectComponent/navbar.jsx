import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar <span className="badge badge-primary">{this.props.totalCount}</span> </a>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
