import {
    call,
    put,
    takeLatest,
    takeEvery
} from 'redux-saga/effects'
import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    loadedTodos,
    addTodoSuccess,
    todosFailure,
    FETCH_TODOS
} from './actions/todos'

const testDomain = 'http://localhost:3200';

function* getAllTodos() {
    try {
        let fetchUrl = `${testDomain}/v1/todos/findAll`
        const res = yield call(fetch, fetchUrl)
        const todos = yield res.json()
        yield put(loadedTodos(todos.data))
    } catch (e) {
        yield put(todosFailure(e.message))
    }
}

function* saveTodo(action) {
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(action.todo),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        let fetchUrl = `${testDomain}/v1/todos/create`
        const res = yield call(fetch, fetchUrl, options)
        const todo = yield res.json();
        yield put(addTodoSuccess(todo.data))
    } catch (e) {
        yield put(todosFailure(e.message))
    }
}

function* deleteTodo(action) {
    try {
        let fetchUrl = `${testDomain}/v1/todos/delete/${action.id}`
        yield call(fetch, fetchUrl, {
            method: 'POST'
        })
    } catch (e) {
        yield put(todosFailure(e.message))
    }
}

function* updateTodo(action) {
    try {
        let fetchUrl = `${testDomain}/v1/todos/update/${action.id}`
        yield call(fetch, fetchUrl, {
            method: 'POST'
        })
    } catch (e) {
        yield put(todosFailure(e.message))
    }
}

function* rootSage() {
    yield takeLatest(FETCH_TODOS, getAllTodos)
    yield takeLatest(ADD_TODO, saveTodo)
    yield takeLatest(DELETE_TODO, deleteTodo)
    yield takeEvery(TOGGLE_TODO, updateTodo)
}

export default rootSage