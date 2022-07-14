import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'
import './global.css'

import { TASKS } from './mocks/tasks'

interface Task {
  id: string;
  content: string;
  concluded: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>(TASKS)

  function handleOnAddTask(task: string) {
    const newTask = {
      id: uuidv4(),
      content: task,
      concluded: false,
    }

    setTasks(state => [...state, newTask])
  }

  function handleOnConcludeTask(id: string, concluded: boolean) {
    setTasks(state => state.map(task => {
      if (task.id === id) {
        task.concluded = concluded
      }

      return task
    }))
  }

  function handleOnDeleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id))
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <NewTask onAddTask={handleOnAddTask} />

          <Tasks
            tasks={tasks}
            onConcludeTask={handleOnConcludeTask}
            onDeleteTask={handleOnDeleteTask}
          />
        </main>
      </div>
    </>
  )
}
