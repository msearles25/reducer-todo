import React, { useReducer } from 'react';

// components
import Todo from './Todo';
import TodoForm from './TodoForm';

// reducer
import { reducer, initialState } from  '../../reducers/reducer';

const TodoList = () => {
    const [taskState, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <TodoForm dispatch={dispatch}/>
            {taskState.todo.map(task => (
                <Todo key={task.id} task={task} dispatch={dispatch}/>
            ))}
            <button onClick={() => {dispatch({type: "CLEAR_COMPLETE"})}}>Remove Completed</button>
        </div>
    )
}

export default TodoList;