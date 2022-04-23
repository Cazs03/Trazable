import { TypeTodoList } from '../models/TypeTodoList';
export function getLastIdFromArray(TodoList: TypeTodoList) {
  if (TodoList.length > 0) {
    return TodoList.reduce(function (prev, current) {
      return prev.id > current.id ? prev : current;
    });
  } else {
    return { id: 0 };
  }
}
