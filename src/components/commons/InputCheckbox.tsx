import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TypeTodo } from '../../models/TypeTodoList';
import { NetworkStatusContext } from '../views/Main';

type componentCheckbox = { dispatcher: any; todo: TypeTodo };
export default function InputCheckbox({ dispatcher, todo }: componentCheckbox) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const active: boolean = useContext(NetworkStatusContext);

  function onChangeAction() {
    setChecked(!checked);
    dispatch(dispatcher({ todo: todo, checked: checked, active: active }));
  }

  return <input type="checkbox" onChange={onChangeAction} checked={todo.checked} />;
}
