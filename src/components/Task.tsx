import { Trash } from 'phosphor-react';

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  content: string;
  concluded: boolean;
  onConcludedTask: (id: string, concluded: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ id, content, concluded, onConcludedTask, onDeleteTask }: TaskProps) {
  function handleOnChange() {
    onConcludedTask(id, !concluded)
  }

  function handleOnDelete() {
    onDeleteTask(id)
  }	

  return (
    <div className={styles.task}>
      <header>
        <input type="checkbox" checked={concluded} onChange={handleOnChange} />
      </header>

      <div className={styles.content}>
        <p className={concluded ? styles.concluded : styles.nonConcluded}>{content}</p>
      </div>

      <footer>
        <Trash size={24} onClick={handleOnDelete} />
      </footer>
    </div>
  )
}