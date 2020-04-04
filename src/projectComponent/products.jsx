import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, name: 'Product 1'},
                {id: 2, name: 'Product 2'},
                {id: 3, name: 'Product 3'},
                {id: 4, name: 'Product 4'},
            ]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        {
                            this.state.products.map(product => (
                                <li className="list-group-item" key={product.id}>
                                    <Link to={`/products/${product.id}`}> {product.name}</Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
        );
    }
}

export default Products;
