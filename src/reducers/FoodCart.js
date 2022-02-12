import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QT} from "../actions/action";

const INIT_STATE = {
    product : [],
    cart : []
};

export default function foodcart(state = INIT_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { 
                ...state,
                id: action.id
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                foodID: action.foodID
            };
        case ADJUST_QT:
            return{
                ...state,
                foodID: action.foodID

            }
        default:
            return state;
    }
}