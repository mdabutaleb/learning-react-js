import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {id: 1, name: 'Post 1'},
                {id: 2, name: 'Post 2'},
                {id: 3, name: 'Post 3'},
                {id: 4, name: 'Post 4'},
            ]
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        {
                            this.state.posts.map(post => (
                                <li className="list-group-item" key={post.id}>
                                    {/*<Link to={`/posts/${post.id}`}> {post.name}</Link>*/}
                                    <Link to={`/posts/2020/january?sortBy=newest&approved=true`}> {post.name}</Link>
                                </li>
                            ))
                        }

                    </ul>
                </div>

            </div>
        );
    }
}

export default Posts;
