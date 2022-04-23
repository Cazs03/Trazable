import { TypeTodoList } from '../models/TypeTodoList';

export function setLocalStorage(TodoList: TypeTodoList) {
  localStorage.setItem('user', JSON.stringify(TodoList));
}

export function getLocalStorage(): TypeTodoList {
  return JSON.parse(localStorage.getItem('user') || '[]');
}
