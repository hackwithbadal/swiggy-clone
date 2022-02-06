import { createStore } from "redux";
import reducer from "./reducers/reduce";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

export default store;