import React from 'react'

// function Greet() {
//     return <h1>Hello World</h1>
// }

export const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello re {name} {props.heroName}</h1>
            {props.children}
        </div>
    )
}
// export default Greet;