import Provider from './components/Provider'
import Form from './components/Form'
import Todos from './components/Todos'
import Actions from './components/Actions'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import IdleTimer from './components/IdleTimer'

const App = () => {
  return (
    <Provider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <Actions />
        <Todos />
        <IdleTimer />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Provider>

  )
}

export default App
