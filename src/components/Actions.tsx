import { useContext } from 'react'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import Button from './Button'
import { Context } from '../context/Context'

const Actions = () => {
  const { deleteAllTodos, clearCompletedTodos, completedTodosCount } = useContext(Context)

  return (
    <div className="todos__actions">
      <Button
        type="button"
        onClick={deleteAllTodos}
        title="Delete All Todo's"
      >
        <RiDeleteBin5Line />
      </Button>
      <Button
        type="button"
        onClick={clearCompletedTodos}
        title="Clear Completed Todo's"
        disabled={!completedTodosCount}
      >
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions