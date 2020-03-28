import React, {Component} from 'react';
import FragmentTable from "./FragmentTable";

function FragmentDemo() {

    return (
        <React.Fragment>
            <h2>This is heading 2</h2>
            <p>This is paragraph</p>
            <p>The table component is loading..</p>
            <FragmentTable/>
        </React.Fragment>
    );
}

export default FragmentDemo;
