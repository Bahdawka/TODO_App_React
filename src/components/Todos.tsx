import { useContext } from 'react'
import Todo from './Todo'
import { Context } from '../context/Context'

const Todos = () => {
  const { todos, completedTodosCount } = useContext(Context)

  return (
    <div className="todos">
      {todos.length === 0 && <p className="todos__empty">No Todo's yet</p>}
      {completedTodosCount > 0 && <div className="todos__message">You have completed {completedTodosCount} {completedTodosCount === 1 ? 'Todo' : 'Todo\'s'}</div>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default Todos