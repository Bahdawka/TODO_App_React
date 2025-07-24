import { useContext } from 'react'
import { RiCheckboxCircleFill, RiCheckboxBlankCircleLine, RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { Context } from '../context/Context'
import type { TodoInterface } from '../types/Todo.interface'

interface TodoProps {
  todo: TodoInterface
}

const Todo = ({ todo: { id, title, completed } }: TodoProps) => {
  const { deleteTodo, toggleTodo } = useContext(Context)

  return (
    <div className={`todo ${completed ? 'todo--completed' : ''}`}>
      <div className="todo__id"></div> {/* possible to add {id} between divs to see user id*/}
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed"></div> {/* possible to add {completed.toString()} between divs to see boolean*/}
      <RiDeleteBin2Line className="todo__delete-btn" onClick={() => deleteTodo(id)} />
      {
        completed ?
          (
            <RiCheckboxCircleFill className="todo__check-btn" onClick={() => toggleTodo(id)} />
          ) : (
            <RiCheckboxBlankCircleLine className="todo__check-btn" onClick={() => toggleTodo(id)} />
          )
      }
    </div >
  )
}

export default Todo