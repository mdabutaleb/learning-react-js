import React, {Component} from 'react';
import Person from "./Person";

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Google',
            age: '20',
            skill: 'PHP'
        }, {
            id: 2,
            name: 'Sumon',
            age: '28',
            skill: 'React JS'
        }, {
            id: 3,
            name: 'Mukta Mahmud',
            age: '26',
            skill: 'UI/UX Design'
        },

    ];

    const PersonList = persons.map(person => (<Person key={person.id} person={person}/>));
    return (
        <div>
            <table style={{'margin': '0px auto'}} border="1">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skills</th>
                </tr>
                </thead>
                <tbody>
                {PersonList}
                </tbody>


                {/*Looping in table*/}
                {/*{*/}
                {/*    persons.map(person => (*/}
                {/*        <tr>*/}
                {/*            <td>{person.name}</td>*/}
                {/*            <td>{person.age}</td>*/}
                {/*            <td>{person.skill}</td>*/}
                {/*        </tr>*/}
                {/*    ))*/}
                {/*}*/}
            </table>


            {/*creating list on the above and rendering here*/}
            {/*{nameList}*/}


            {/*Looping in javascript */}
            {/*<h5>*/}
            {/*    { names.map(name => (*/}
            {/*        <h2>{name}</h2>*/}
            {/*    ))}*/}
            {/*</h5>*/}
        </div>
    )

}

export default NameList;
