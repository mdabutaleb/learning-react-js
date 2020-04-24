import React, {Component} from 'react';

class ProductDetails extends Component {

    handleSave = () => {
       this.props.history.push('/products')
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h5 className="display-6">Product - {this.props.match.params.id}</h5>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                        attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <p className="lead">
                        {/*<button onClick={this.handleSave} className="btn btn-primary btn-lg" role="button">Save</button>*/}
                    </p>
                </div>
            </div>
        );
    }
}

export default ProductDetails;
