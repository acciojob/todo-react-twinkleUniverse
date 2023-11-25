

import React, { useState } from "react";

const TodoList = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (event) => {
    
      setText(event.target.value);
      console.log(text);
  };

  const addTodo = () => {
    if(text.trim() !==''){
      setTodo([...todo, text]);
      console.log(todo);
      setText("");
     } // Clearing the text after adding to todo
  };

  function deleteItem(key) {

      const newTodo = todo.filter((task,index)=>index!=key);
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

export default TodoList;







