import { TypeTodo, TypeTodoList } from '../models/TypeTodoList';
import { getLocalStorage } from './localStorage';
export function getLastIdFromArray(TodoList: TypeTodoList) {
  if (getLocalStorage().length > 0) {
    return getLocalStorage().reduce(function (prev, current) {
      return prev.id > current.id ? prev : current;
    });
  } else {
    return { id: 0 };
  }
}

export function checkTodoListInLocalStorage(id: number): TypeTodo {
  const localStorage = getLocalStorage();
  const todo = localStorage.find((todo) => {
    todo.id === id;
  });
  return todo;
}
