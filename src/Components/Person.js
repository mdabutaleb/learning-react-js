import React, {Component} from 'react';

function Person(props) {
    const {person, id} = props;
    return (

        <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.skill}</td>
            {/*<td>{props.person.age}</td>*/}
            {/*<td>{props.person.skill}</td>*/}
        </tr>

    )
}

export default Person;
