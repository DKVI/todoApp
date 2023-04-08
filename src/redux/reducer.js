import { combineReducers } from "redux";
import { filterReducer } from "../components/Filters/filterSlice";
import { todoReducer } from "../components/TodoList/todoSlice";

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
