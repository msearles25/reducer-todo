import React, { useReducer } from 'react';

const Todo = ({dispatch, ...props}) => {
    return (
        <div onClick={(() => {
           props.completedItem(props.task.id)
        })}>
            <p style={{ textDecoration: props.task.completed ? 'line-through' : 'none' }}>{props.task.item}</p>
        </div>
    )
}

export default Todo;