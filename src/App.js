import { useStore, actions } from './store';
import './App.css';
import { ADD_TODO } from './store/constants';


function App() {
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
  console.log('todoInput: ', todoInput);


  const handleSubmit = () => {
    dispatch(actions.addToDo(todoInput));
  }

  console.log(todos);


  return (
    <div>
      <h3>Todo app</h3>
      <input type="text" value={todoInput} placeholder='Enter todo...' onChange={e => {
        dispatch(actions.setTodoInput(e.target.value))
      }} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {todos.map((job, index) => {
          return (
            <li key={index}>{job}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
