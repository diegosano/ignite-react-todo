import { Task } from './Task'

import styles from './Tasks.module.css'

interface Task {
  id: string;
  content: string;
  concluded: boolean;
}

interface TasksProps {
  tasks: Task[];
  onConcludeTask: (id: string, concluded: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function Tasks({ tasks, onConcludeTask, onDeleteTask }: TasksProps) {
  const createdTasks = tasks.length
  const concludedTasks = tasks.reduce((acc, task) => task.concluded ? acc + 1 : acc, 0)
  const sortedTasks = tasks.sort((a) => a.concluded ? 1 : -1)

  return (
    <div>
      <header className={styles.infos}>
        <div className={styles.created}>
          <p>
            Tarefas criadas <span className={styles.counter}>{createdTasks}</span>
          </p> 
        </div>
        
        <div  className={styles.concluded}>
          <p>
            Concluídas <span className={styles.counter}>{concludedTasks}</span>
          </p> 
        </div>
      </header>

      <section className={styles.tasks}>
        {sortedTasks.map(task => (
          <Task 
            key={task.id}
            id={task.id}
            content={task.content}
            concluded={task.concluded}
            onConcludedTask={onConcludeTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </section>
    </div>
  )
}