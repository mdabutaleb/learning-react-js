// import React, {Component} from 'react';
import _ from "lodash";


export function paginate(totalItems, pageNumber, itemPerPage) {
    const startIndex = (pageNumber - 1) * itemPerPage;
    return _(totalItems)
        .slice(startIndex)
        .take(itemPerPage)
        .value();
}

