import { useDispatch } from 'react-redux';
import { TypeTodo } from '../../models/TypeTodoList';

type componentCheckbox = { dispatcher: any; todo: TypeTodo };
export default function InputCheckbox({ dispatcher, todo }: componentCheckbox) {
  const dispatch = useDispatch();

  function onChangeAction(event: any) {
    console.log(event);
  }

  return (
    <>
      <p>{todo.checked.toString()}</p>
      <input type="checkbox" onClick={() => dispatch(dispatcher(todo))} checked={todo.checked} />
    </>
  );
}
