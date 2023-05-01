import {TbClipboardText} from "react-icons/tb";
import {ITask} from "../../App";
import {Task} from "../Task";
import styles from "./tasks.module.css";
import logo from './../../assets/Screenshot_2.png'

interface Props {
    tasks: ITask[];
    onComplete: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export function Tasks({tasks, onComplete, onDelete}: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    tasks = tasks.sort((a, b) => b.priority - a.priority);
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>
                        {completedTasks} de {tasksQuantity}
                    </span>
                </div>
            </header>

            <div className={styles.list}>
                <>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            onComplete={onComplete}
                            onDelete={onDelete}
                        />
                    ))}

                    {tasks.length <= 0 && (
                        <section className={styles.empty}>
                            <img src={logo}  alt="logo" width="200" style={{'borderRadius': 16}} />
                            {/*<TbClipboardText size={50}/>*/}
                            <div>
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </div>
                        </section>
                    )}
                </>
            </div>
        </section>
    );
}