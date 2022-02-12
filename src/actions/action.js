export const CHANGE_ID = "CHANGE_ID";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QT = "ADJUST_QT";

export const  changeid = (uid) => {
    return {
        type: CHANGE_ID,
        id: uid
    }
}   
export const  addtocart = (pid) => {
    return {
        type: ADD_TO_CART,
        id: pid
    }
}   
export const  removefromcart = (pid) => {
    return {
        type: REMOVE_FROM_CART,
        id: pid
    }
}   
export const  adjustqt = (pid) => {
    return {
        type: ADJUST_QT,
        id: pid
    }
}   