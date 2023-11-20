/*import React, { useState } from "react";


const InputFiled = () => {

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value);
        console.log(text);
    }

    const addTOdo=()=> {
        setTodo([...todo, text]);
        setText("");
        console.log(todo);
    }
    return (
        <div>
            <input type="text" placeholder="Type here" value={text} onChange={handleChange} />
            <button onClick={addTOdo}>Add ToDo</button>
        </div>
    )
}

export default InputFiled;*/

import React, { useState } from "react";

const InputField = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value);
        console.log(text);
    };

    const addTodo = () => {
        setTodo([...todo, text]);
        console.log(todo);
        setText(""); // Clearing the text after adding to todo
    };

    function deleteItem(key) {
        const newTodo = [...todo];
        newTodo.splice(key, 1);
        setTodo(newTodo);
        console.log(todo);
    }

    return (
        <div className="content"> 
       
            <input
                type="text"
                placeholder="Type here"
                value={text}
                onChange={handleChange} 
            />
            <button onClick={addTodo}>Add Todo</button>
        
            <ul>
                {todo.map((item, index) => (
                    <li key={index}><span className="ele1">{item}</span>
                        <button className="ele2" onClick={() => deleteItem(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    );
};

export default InputField;
