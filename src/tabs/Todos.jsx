import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const storageTodo = localStorage.getItem('todos');
    if (storageTodo) {
      return JSON.parse(storageTodo);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const addTodo = (text) => {
    const newTodo = { text: text, id: nanoid() }
    setTodos(prev => [...prev, newTodo]);
  }
  const deleteTodo = id => { setTodos(prev => prev.filter(item => item.id !== id)); }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todos;
