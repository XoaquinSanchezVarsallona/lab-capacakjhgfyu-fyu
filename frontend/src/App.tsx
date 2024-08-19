
import InitialForm from "./components/InitialForm.tsx";
import {useEffect, useState} from "react";
import ToDoList from "./components/ToDoList.tsx";

export default function App() {
    const [list, setList] = useState(() => {
        const localValue  = localStorage.getItem("ITEM");
        if (localValue == null) { return []}
        else return JSON.parse(localValue)
    });

    function addToDo (title : String) : void {
        setList((currentList: any[]) => {
            return [...currentList, {id: crypto.randomUUID(), title, completed: false}];
        });
    }

    function removeToDo (id : string| number) : void {
        setList( (currentList : any[]) => {
            return currentList.filter( item  => item.id !== id )
        })
    }

    function toggleToDo (id: string | number, completed : boolean) : void {
        setList((currentList: any[]) => {
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
            <ToDoList toDos={list} toggleToDo={toggleToDo} removeToDo={removeToDo}/>
        </>

    )

}