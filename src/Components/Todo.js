import React from 'react';

const Todo = ({text , todo, todos, setTodos }) => {

  const deleteHandler = ()=>{
    // console.log(todo) test todo
    setTodos(todos.filter((element) => element.id !== todo.id))

  };
  const completeHandler= ()=> {
    setTodos(todos.map((item)=>{
      if (item.id === todo.id){
       return {
         ...item,
         completed: !item.completed  // if item:false switch to item: true
       }
      }
      return item;
    }))
  }
  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
