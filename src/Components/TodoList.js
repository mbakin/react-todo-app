import React from 'react';
import Todo from "./Todo";


const TodoList = ({todos, setTodos , filteredTodos }) => {
  // console.log(todos) test todos

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo =>(
          // Every new element

          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
