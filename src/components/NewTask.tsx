import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'

interface NewTaskProps {
  onAddTask: (task: string) => void
}

export function NewTask( { onAddTask }: NewTaskProps ) {
  const [task, setTask] = useState('')

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTask(event.target.value)
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    onAddTask(task)
    setTask('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.container}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleOnChange}
        onInvalid={handleNewTaskInvalid}
        required
      />

      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}