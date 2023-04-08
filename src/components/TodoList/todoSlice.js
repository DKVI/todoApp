const initState = [
  { name: "Learn React", priority: "High", completed: false, id: 1 },
  { name: "Learn Redux", priority: "Medium", completed: true, id: 2 },
  { name: "Learn Redux/Toolkit", priority: "High", completed: false, id: 3 },
];

export function todoReducer(state = initState, action) {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/changeTodoStatus":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else return todo;
      });
    default:
      return state;
  }
}
