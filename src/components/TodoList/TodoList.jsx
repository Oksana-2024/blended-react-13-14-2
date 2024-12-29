import TodoListItem from '../TodoListItem/TodoListItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const TodoList = ({ todos, deleteTodo, openEditForm }) => {
  return (
    <Grid>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem
            id={item.id}
            text={item.text}
            index={index + 1}
            deleteTodo={deleteTodo}
            openEditForm={openEditForm}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
