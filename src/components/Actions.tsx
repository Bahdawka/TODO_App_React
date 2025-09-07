import { useContext } from 'react'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import Button from './Button'
import { Context } from '../context/Context'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Actions = () => {
  const { deleteAllTodos, clearCompletedTodos, completedTodosCount } = useContext(Context)

  const handleDeleteAllTodos = () => {
    deleteAllTodos()
    toast.warning('All TODO\'s was deleted!')
  }

  const handleClearCompletedTodos = () => {
    clearCompletedTodos()
    toast.info('Completed TODO\'s was cleared! 🔥')
  }

  return (
    <div className="todos__actions">
      <Button
        type="button"
        onClick={handleDeleteAllTodos}
        title="Delete All Todo's"
      >
        <RiDeleteBin5Line />
      </Button>
      <Button
        type="button"
        onClick={handleClearCompletedTodos}
        title="Clear Completed Todo's"
        disabled={!completedTodosCount}
      >
        <RiCheckboxCircleLine />
      </Button>
    </div>
  )
}

export default Actions