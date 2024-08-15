import {useState} from "react";
import ToDoElement from "./ToDoElement.tsx";
import react from "@vitejs/plugin-react";

export default function ToDoList( {toDos, removeToDo, toggleToDo } ) {

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