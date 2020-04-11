import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Liked from "../../liked";

import {paginate} from "../../../utilis/paginate";
import PaginationButton from "../../../utilis/paginationButton";

const apiEndPoint = 'https://jsonplaceholder.typicode.com/posts';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            itemPerPage: 10,
            currentPage: 1,
        }
    }

    async componentDidMount() {
        const {data} = await axios.get(apiEndPoint)
        this.setState({
            data
        })
        console.log(data)
    }

    handleAdd = async () => {
        const item = {title: "Sumon Mahmud", body: "This is body"}
        const {data} = await axios.post(apiEndPoint, item);
        const posts = [data, ...this.state.data];
        this.setState({data: posts})
    }
    handleUpdate = async item => {
        item.title = "Updated by Sumon Mahmud"
        const {data} = await axios.put(apiEndPoint + '/' + item.id, item);
        const posts = [...this.state.data];
        const index = posts.indexOf(item);
        posts[index] = {...data}
        this.setState({data: posts})
    }

    handleDelete = async item => {
        const originalData = this.state.data;
        const data = this.state.data.filter(p => p.id !== item.id)
        this.setState({data})

        try {
            await axios.delete(apiEndPoint + '/' + item.id);
            throw new Error('Error re');
        } catch (error) {
            console.log('Logging the error', error);
            alert('Something wrong with delete')
            this.setState({data: originalData})
        }

    }

    handlePagination = (page) => {
        this.setState({
            currentPage: page,
        })
    }

    render() {
        const {itemPerPage, currentPage} = this.state
        const data = paginate(this.state.data, currentPage, itemPerPage)
        return (
            <div className="container">
                <div className="starter-template">
                    <button onClick={this.handleAdd} className="btn btn-primary">Add New</button>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(item =>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>

                                        <button onClick={() => this.handleUpdate(item)}
                                                className="btn btn-primary btn-sm">Update
                                        </button>
                                        <button onClick={() => this.handleDelete(item)}
                                                className="btn btn-danger btn-sm">Delete
                                        </button>

                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <PaginationButton
                        itemPerPage={itemPerPage}
                        totalItem={this.state.data.length}
                        currentPage={currentPage}
                        onPageChange={this.handlePagination}
                    />
                </div>
            </div>
        );
    }
}

export default Posts;
