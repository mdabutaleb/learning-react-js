import React from 'react';
import queryString from 'query-string'

const PostDetails = ({match, location}) => {

    const {year, month} = match.params
    const {sortBy, approved} = queryString.parse(location.search)
    return (
        <div>
            <div className="jumbotron">
                <h5 className="display-6">Post - {year} {month} {sortBy} {approved}</h5>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger
                    container.</p>
                <p className="lead">
                    {/*<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>*/}
                </p>
            </div>
        </div>
    );

}

export default PostDetails;
