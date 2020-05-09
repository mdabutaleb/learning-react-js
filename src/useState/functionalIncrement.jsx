import React, {useState} from 'react';

const FunctionalIncrement = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    return (
        <div>
            <p>
                Increment component increment
            </p>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
            <br/>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary btn-sm"> +</button>

            <button onClick={() => setCount(count - 1)} className="btn btn-primary btn-sm"> -</button>
            <p>{name} has increases  {count} times</p>
        </div>
    );

}

export default FunctionalIncrement;
