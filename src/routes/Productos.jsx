import { useState } from 'react';
import './Productos.css';
import AddTodo from '../components/AddTodo.jsx';
import TaskList from '../components/TaskList.js';

let nextId = 3;

const initialTodos = [
  { id: 0, title: 'Tarta de almendras, avellanas y nueces', done: true },
  { id: 1, title: 'Shake abocado', done: false },
  { id: 2, title: 'Green rostizado', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
