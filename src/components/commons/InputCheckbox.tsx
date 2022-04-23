import { useDispatch } from 'react-redux';
import { TypeTodo } from '../../models/TypeTodoList';

type componentCheckbox = { dispatcher: any; todo: TypeTodo };
export default function InputCheckbox({ dispatcher, todo }: componentCheckbox) {
  const dispatch = useDispatch();

  return (
    <input
      type="checkbox"
      id="cbox1"
      value="first_checkbox"
      onClick={() => dispatch(dispatcher(todo))}
      defaultChecked={todo.checked}
    />
  );
}
