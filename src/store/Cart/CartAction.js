import {
    ADD_CART,
    REMOVE_CART
} from './CartTypes'

export const addCartItem = (card_info) => {
    return {
        type: ADD_CART,
        payload: card_info
    }
}
export const removeCartItem = (card_info) => {
    return {
        type: REMOVE_CART,
        payload: card_info
    }
}