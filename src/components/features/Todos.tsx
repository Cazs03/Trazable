import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TypeTodo, TypeTodoList } from '../../models/TypeTodoList';
import { addTodo, checkTodo, selectTodoList } from '../../redux/slice/todoListSlice';
import ButtonAdd from '../commons/ButtonAdd';
import InputCheckbox from '../commons/InputCheckbox';
import LabelCombined from '../commons/LabelCombined';

export default function Todos() {
  const [description, setDescription] = useState('');
  const getTodoList = useSelector(selectTodoList);

  return (
    <div>
      <input
        type="text"
        placeholder="descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonAdd dispatcher={addTodo} description={description} />
      <ul>{renderTodosList(getTodoList)}</ul>
    </div>
  );
}

function renderTodosList(getTodoList: TypeTodoList) {
  return getTodoList.map((todo: TypeTodo, index) => (
    <li key={index}>
      <LabelCombined
        description={todo.description}
        IncludeComponent={<InputCheckbox todo={todo} dispatcher={checkTodo} />}
      />
    </li>
  ));
}
