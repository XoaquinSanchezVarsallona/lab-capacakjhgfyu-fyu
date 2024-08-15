
import InitialForm from "./components/InitialForm.tsx";
import {useEffect, useState} from "react";
import ToDoList from "./components/ToDoList.tsx";

export default function App() {
    const [list, setList] = useState(() => {
        const localValue  = localStorage.getItem("ITEM");
        if (localValue == null) { return []}
        else return JSON.parse(localValue)
    });

    function addToDo (title : String) {
        setList(currentList => {
            return [...list, {id: crypto.randomUUID(), title, completed: false}];
        });
    }

    function removeToDo (id : String) {
        setList( currentList => {
            return currentList.filter( item => item.id !== id )
        })
    }

    function toggleToDo (id: String, completed : boolean) {
        setList(currentList => {
            return currentList.map( item => {
                if (item.id === id) {
                    return  { ...item, completed }
                }
                else return item
            })
        });
    }

    useEffect( () => {
            localStorage.setItem("ITEM", JSON.stringify(list));
        }
        , [list])

    return (
        <>
            <InitialForm onSubmit={addToDo}/>
            <h1 className={"header"}> Todo List </h1>
            <ToDoList toDos={list} toggleToDo={toggleToDo} removeToDo={removeToDo}></ToDoList>
        </>

    )

}