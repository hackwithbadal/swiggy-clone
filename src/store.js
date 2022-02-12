import { createStore } from "redux";
import  rootreducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootreducer, composeWithDevTools());

export default store;