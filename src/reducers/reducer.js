export const initialState = {
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: new Date()
            }
            return {
                ...state,
                todo: [...state.todo, newTodo]
            }
        case 'TOGGLE_COMPLETE':
            return {
                ...state, 
                todo: state.todo.map(todo => {
                    if(todo.id === action.payload){
                        if(!todo.completed){
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        }else{
                            return {
                                ...todo,
                                completed: !todo.completed
                            }
                        }
                    }else {
                        return todo;
                    }
                })
            }
        case 'CLEAR_COMPLETE':
            return {
                ...state, 
                todo: state.todo.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
}