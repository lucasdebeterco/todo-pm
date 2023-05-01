import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
    onAddTask: (taskTitle: string, taskPriority: number) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState(0);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title, priority);
        setTitle("");
    }

    function onChangePriority(event: ChangeEvent<HTMLSelectElement>) {
        setPriority(parseInt(event.target.value));
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form onSubmit={handleSubmit} className={styles.newTaskForm}>
                <input
                    placeholder="Adicione uma nova tarefa"
                    type="text"
                    value={title}
                    onChange={onChangeTitle}
                />

                <select onChange={onChangePriority}>
                    <option value={0}>Normal</option>
                    <option value={1}>Alta</option>
                </select>

                <button className={styles.criar}>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    );
}