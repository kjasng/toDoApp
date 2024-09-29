import { SET_TODO_INPUT, ADD_TODO } from './constants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})


export const addToDo = payload => ({
    type: ADD_TODO,
    payload
})