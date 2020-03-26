import React from "react";

// functional component with js syntax
// function Hello() {
//     return <h1>Hello World</h1>
// }

// functional component with jsx syntax
// const Hello = () => {
//     return(
//       <h1>Hello Bangladesh!</h1>
//     );
// }

// creating component using react create element
// const Hello = () => {
//     return(
//         React.createElement(
//             'div',
//             null,
//             'Hello Dhaka!'
//         )
//     )
// }


// create sub element
// const Hello = () => {
//     return (
//         React.createElement(
//             'div',
//             null,
//             React.createElement(
//                 'h1',
//                 null,
//                 'Hello Sumon Mahmud. I\'m creating using create.Element '
//             )
//         )
//     )
// }

// create sub element with class and id

// const Hello = props => {
//     return (
//         React.createElement(
//             'div',
//             {'id': 'MainDiv', className: 'mainDiv'},
//             React.createElement(
//                 'h1',
//                 {className: 'heading'},
//                 'Now the css has added'
//             )
//         )
//     )
// }


// const Hello = props => {
//     return (
//         React.createElement(
//             'div',
//             null,
//             React.createElement(
//                 'h1',
//                 {className: 'heading', 'id': 'heading'},
//                 'Hello ' + props.name +", "+ props.branch
//             )
//         )
//     )
// }


// functional component with child component

const Hello = props => {
    return (
        <div>
            <h1>Hello {props.name}, {props.branch}</h1>
            {props.children}
        </div>
    )
}
export default Hello;
