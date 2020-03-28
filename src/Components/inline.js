import React, {Component} from 'react';


function Inline() {
    let style = {
        'color': 'blue',
        'bigFont': '72px'
    }
    return (
        <div>
            <p style={style}>Inline css</p>
            <h1 className="success">Success</h1>
            <h2 className={style.error}>Error</h2>
        </div>
    );
}

export default Inline;
