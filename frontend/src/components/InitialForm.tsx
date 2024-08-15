import {FormEvent, useState} from "react";

export default function InitialForm( {onSubmit} ) {
    const [newItem , setNewItem] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if ( newItem === "" ) return
        onSubmit(newItem)
        setNewItem("")
    }


    return (
        <form onSubmit={handleSubmit} className="input-handler">
            <div className={"input-row"}>
                <label className={"item"}> New Item </label>
                <input
                    id={"item"}
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                />
            </div>
            <button className={"add-button"} onClick={() => {
            }}> Add Item
            </button>
        </form>
    )
}