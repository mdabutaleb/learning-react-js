import React from 'react'

const Hello = () => {
//     return(
//         <div>
//             <h1>Hello Sumon</h1>
//         </div>
//     )

    return React.createElement(
        'div',
        {
            id: 'Hello',
            className: 'myClassName'
        },
        React.createElement(
            'h1',
            null,
            'Hello Sumon'
        )
    )
}

export default Hello;