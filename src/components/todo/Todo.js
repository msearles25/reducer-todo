import React, { useReducer } from 'react';

const Todo = ({dispatch, ...props}) => {
    return (
        <div onClick={(() => {
            dispatch({type: 'TOGGLE_COMPLETE', payload: props.task.id})
        })}>
            <p style={{ textDecoration: props.task.completed ? 'line-through' : 'none' }}>{props.task.item}</p>
        </div>
    )
}

export default Todo;