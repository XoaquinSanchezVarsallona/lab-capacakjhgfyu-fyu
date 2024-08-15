

export default function ToDoElement ({completed, title, id, toggleToDo, removeToDo}) {

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