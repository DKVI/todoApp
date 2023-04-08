import { createSelector } from "reselect";

export const todoSelector = (state) => state.todoList;
export const filterSatusSelector = (state) => state.filters.status;
export const filterSearchSelector = (state) => state.filters.search;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoSelector,
  filterSatusSelector,
  filterSearchSelector,
  filterPrioritySelector,
  (todos, status, search, priorities) => {
    return todos.filter((todo) => {
      if (status === "All") {
        return (
          todo.name.includes(search) &&
          ((priorities.length !== 0 && priorities.includes(todo.priority)) ||
            priorities.length === 0)
        );
      } else {
        if (status === "Completed") {
          return (
            todo.completed &&
            todo.name.includes(search) &&
            ((priorities.length !== 0 && priorities.includes(todo.priority)) ||
              priorities.length === 0)
          );
        } else {
          return (
            !todo.completed &&
            todo.name.includes(search) &&
            ((priorities.length !== 0 && priorities.includes(todo.priority)) ||
              priorities.length === 0)
          );
        }
      }
    });
  }
);
