import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TypeTodo, TypeTodoList } from '../../models/TypeTodoList';
import { addTodo, checkTodo, selectTodoList } from '../../redux/slice/todoListSlice';
import '../../styles/container.scss';
import ButtonAdd from '../commons/ButtonAdd';
import InputCheckbox from '../commons/InputCheckbox';
import LabelCombined from '../commons/LabelCombined';

export default function Todos() {
  const [description, setDescription] = useState('');
  const getTodoList = useSelector(selectTodoList);

  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonAdd dispatcher={addTodo} description={description} />
      <ul className="todo-list-container">{renderTodosList(getTodoList)}</ul>
    </div>
  );
}

function renderTodosList(getTodoList: TypeTodoList) {
  return getTodoList.map((todo: TypeTodo, index) => (
    <li key={index}>
      <LabelCombined
        IncludeComponent={<InputCheckbox todo={todo} dispatcher={checkTodo} />}
        description={todo.description}
      />
    </li>
  ));
}
