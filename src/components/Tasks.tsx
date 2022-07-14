import { Clipboard } from './Clipboard';
import { Task } from './Task';

import styles from './Tasks.module.css';

interface ITask {
  id: string;
  content: string;
  concluded: boolean;
}

interface TasksProps {
  tasks: ITask[];
  onConcludeTask: (id: string, concluded: boolean) => void;
  onDeleteTask: (id: string) => void;
}

export function Tasks({ tasks, onConcludeTask, onDeleteTask }: TasksProps) {
  const createdTasks = tasks.length;
  const concludedTasks = tasks.reduce((acc, task) => (task.concluded ? acc + 1 : acc), 0);
  const sortedTasks = tasks.sort((a) => (a.concluded ? 1 : -1));

  return (
    <div>
      <header className={styles.infos}>
        <div className={styles.created}>
          <p>
            Tarefas criadas
            {' '}
            <span className={styles.counter}>{createdTasks}</span>
          </p>
        </div>

        <div className={styles.concluded}>
          <p>
            Concluídas
            {' '}
            <span className={styles.counter}>{createdTasks > 0 ? `${concludedTasks} de ${createdTasks}` : 0}</span>
          </p>
        </div>
      </header>

      <section>
        {sortedTasks.length ? sortedTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            concluded={task.concluded}
            onConcludedTask={onConcludeTask}
            onDeleteTask={onDeleteTask}
          />
        )) : (
          <section className={styles.empty}>
            <Clipboard />
            <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
        )}
      </section>
    </div>
  );
}
