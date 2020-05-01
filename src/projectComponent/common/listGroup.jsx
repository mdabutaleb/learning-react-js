import React from 'react';

const ListGroup = (props) => {
    const {genres, valueProperty, textProperty, handleSelected, selectedItem} = props
    return (
        <ul className="list-group">

            {genres.map(genre => (
                <li
                    key={genre[valueProperty]}
                    onClick={() => handleSelected(genre)}
                    className={genre === selectedItem  ? "list-group-item clickable active" : "list-group-item clickable"}>
                    {genre[textProperty]}
                </li>
            ))}
        </ul>
    );

}
ListGroup.defaultProps = {
    valueProperty: "_id",
    textProperty: "name",
}
export default ListGroup;
