export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const TODOS_FAILURE = 'TODOS_FAILURE';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const LOADED_TODOS = 'LOADED_TODOS'
export const FETCH_TODOS = 'FETCH_TODOS'

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
}

export const addTodoSuccess = (todo) => {
    return {
        type: ADD_TODO_SUCCESS,
        todo
    }
}

export const todosFailure = (error) => {
    return {
        type: TODOS_FAILURE,
        error
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const loadedTodos = (todos) => {
    return {
        type: LOADED_TODOS,
        todos
    }
}

export const fetchTodos = () => {
    return {
        type: FETCH_TODOS
    }
}