import { ADD_TODO, SET_TODO_INPUT } from './constants'
import { actions } from '.'

const initState = {
    todos: [],
    todoInput: '',
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
            break
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break
        default:
            throw new Error("Invalid Action.")
    }
}

export { initState }
export default reducer