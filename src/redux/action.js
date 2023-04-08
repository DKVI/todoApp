export const addTodo = (todo) => {
  return {
    type: "todoList/addTodo",
    payload: todo,
  };
};

export const filterSearch = (search) => {
  return {
    type: "filters/filterSearch",
    payload: search,
  };
};

export const filterStatus = (status) => {
  return {
    type: "filters/filterStatus",
    payload: status,
  };
};

export const filterPriority = (priority) => {
  return {
    type: "filters/filterPriority",
    payload: priority,
  };
};

export const changeTodoStatus = (complete) => {
  return {
    type: "todoList/changeTodoStatus",
    payload: complete,
  };
};
