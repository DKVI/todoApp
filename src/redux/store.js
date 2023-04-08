import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

const hanceCompose = composeWithDevTools();
const store = createStore(rootReducer, hanceCompose);

export default store;
