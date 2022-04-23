import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TypeTodo } from '../../models/TypeTodoList';

type componentCheckbox = { dispatcher: any; todo: TypeTodo };
export default function InputCheckbox({ dispatcher, todo }: componentCheckbox) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  function onChangeAction() {
    setChecked(!checked);
  }

  return (
    <input
      type="checkbox"
      onClick={() => dispatch(dispatcher(todo))}
      onChange={onChangeAction}
      checked={todo.checked}
    />
  );
}
