import React, {Component} from 'react';
import './styles.css'


function Stylesheet(props) {
    let color = props.primary ? 'primary' : 'default';
    return (
        <div>
            <p className={`${color} bigFont`}>External CSS Stylesheet component</p>
            <h1 className="success">Success</h1>

        </div>
    );
}

export default Stylesheet;
