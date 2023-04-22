import styles from './App.module.scss'
import Todo from "./components/TodoList/Todo"


function App() {
 
  return (
    <div className={styles.app}>
      <Todo />
    </div>
  )
}

export default App
