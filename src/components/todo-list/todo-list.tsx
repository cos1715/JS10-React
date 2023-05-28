import { ChangeEvent, useState } from "react";
import uniqid from "uniqid";
import { useTodoSelector } from "../../store/selectors/todoSelectors";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "store/actions/todoActions";

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  // значення зі store
  const todoList = useTodoSelector();
  // спеціальна функція для відправки action
  const dispatch = useDispatch();

  const onAdd = () => {
    // відправки action
    dispatch(addTodo({ id: uniqid(), completed: false, content: todo }));
    setTodo("");
  };

  const onDelete = (id: string) => () => {
    dispatch(deleteTodo(id));
  };

  const onUpdate = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodo(id, e.target.checked));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={onChange} value={todo} />
        <button onClick={onAdd}>Add todo</button>
      </div>
      {todoList.map((item) => (
        <div key={item.id}>
          <p>{item.content}</p>
          <input
            type="checkbox"
            defaultChecked={item.completed}
            onChange={onUpdate(item.id)}
          />
          <button onClick={onDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
