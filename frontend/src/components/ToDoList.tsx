import ToDoElement from "./ToDoElement.tsx";

export default function ToDoList( {toDos, removeToDo, toggleToDo } :
{toDos: any[], removeToDo : (id: string | number) => void, toggleToDo : (id: string|number, completed: boolean) => void}) {

    return (
        <ul className={"to-do-list"}>
            {toDos.length == 0 && "There is no ToDo's"}
            {toDos.map( element => {
                return (
                <ToDoElement {...element} removeToDo={removeToDo} toggleToDo={toggleToDo}/>
                )
            })}
        </ul>


    )
}