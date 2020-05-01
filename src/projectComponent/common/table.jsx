import React from 'react';
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({sortColumn, onSort, columns, data}) => {
        return (
        <table className="table">
            <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns}/>
            <TableBody data={data} columns={columns}/>
        </table>
    );

}

export default Table;
