import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';
import EditForm from '../components/EditForm/EditForm';
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
  const [isEditing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = text => {
    const newTodo = { text: text, id: nanoid() };
    setTodos(prev => [...prev, newTodo]);
  };
  const deleteTodo = id => {
    // setTodos(prev => prev.filter(item => item.id !== id));

    setTodos(prev => {
      const index = prev.findIndex(item => item.id === id);

      const todos = prev.toSpliced(index, 1);

      return todos;
    });
  };

  const openEditForm = selectedTodo => {
    setEditing(true);
    setCurrentTodo(selectedTodo);
  };

  const cancelEdit = () => {
    setEditing(false);
    setCurrentTodo({});
  };

  const editTodo = updatedText => {
    const updatedTodo = {
      id: currentTodo.id,
      text: updatedText,
    };

    setTodos(prevTodos => {
      // const todos = prevTodos.map(item =>
      //   item.id === updatedTodo.id ? updatedTodo : item,
      // );
      // return todos;

      const index = prevTodos.findIndex(item => item.id === updatedTodo.id);

      const todos = prevTodos.toSpliced(index, 1, updatedTodo);
      return todos;
    });

    cancelEdit();
  };

  return (
    <div>
      {!isEditing ? (
        <Form onSubmit={addTodo} />
      ) : (
        <EditForm
          currentTodo={currentTodo}
          cancelEdit={cancelEdit}
          onSubmit={editTodo}
        />
      )}

      <TodoList
        todos={todos}
        openEditForm={openEditForm}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Todos;
