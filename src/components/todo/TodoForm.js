import React, { useState } from 'react';

const TodoForm = ({dispatch}) => {
    const [newText, setNewText] = useState('');

    const handleChange = e => {
        setNewText(e.target.value);
    }

    return (
        <div>
            <input 
                type='text' 
                name='todo'
                value={newText}
                onChange={handleChange}
                />
            <button onClick={() => {
                dispatch({type: 'ADD_TODO', payload: newText})
                setNewText('')
            }}>Add a todo</button>
        </div>
    )
}

export default TodoForm;