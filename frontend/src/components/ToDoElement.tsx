

export default function ToDoElement ({completed, title, id, toggleToDo, removeToDo} :  {
    completed: boolean;
    title: string;
    id: string | number;
    toggleToDo: (id: string | number, isChecked: boolean) => void;
    removeToDo: (id: string | number) => void;
}) {

    return (
        <li>
            <label>
                <input
                type="checkbox"
                checked={completed}
                onChange={ e => toggleToDo(id, e.target.checked) }
                />
                {title}
            </label>
            <button
                className={"delete-button"}
                onClick={() => removeToDo(id)}
            >
                Delete button
            </button>
        </li>
    )

}