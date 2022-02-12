import { combineReducers } from "redux";
import foodcart from "./FoodCart";
import reducer from "./reduce"

const rootReducer = combineReducers({
    foodcart,
    reducer
});

export default rootReducer;