import React, {Component} from 'react';
import PropType from 'prop-types'
import _ from "lodash";

const Pagination = props => {
    const {itemPerPage, totalItem, currentPage, onPageChange} = props
    const totalPage = Math.ceil(totalItem / itemPerPage);
    if (totalPage === 1) return null
    const pages = _.range(1, totalPage + 1)

    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                {pages.map(page => (
                    <li className={page == currentPage ? 'page-item active' : 'page-item'} key={page}>
                        <a className="page-link active" href="#" onClick={() => onPageChange(page)}>{page}</a>
                    </li>
                ))}

            </ul>
        </nav>
    );

}
Pagination.propTypes =
{
    itemPerPage: PropType.number.isRequired,
    currentPage: PropType.number.isRequired,
    totalItem: PropType.number.isRequired,
    onPageChange: PropType.func.isRequired
}
export default Pagination;
