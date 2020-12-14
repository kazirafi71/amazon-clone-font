import {
    ADD_CART,
    REMOVE_CART
} from "./CartTypes"


const init = {
    initialCart: 0,
    cartInfo: []
}

const cartReducer = (state = init, action) => {

    switch (action.type) {
        case ADD_CART:
            var x=0
            console.log(typeof(parseInt(action.payload.price)))
            x=x+parseInt(action.payload.price)
            console.log(x)
            return {
                initialCart: state.initialCart + 1,
                    cartInfo: [...state.cartInfo, action.payload]
            }
            case REMOVE_CART:
                for (let i = 0; i < state.cartInfo.length; i++) {
                    if(state.cartInfo[i].id==action.payload.id)
                    {
                        
                        var index=i;
                        break;
                    }

                }

                let newItem=[...state.cartInfo]
                newItem.splice(index,1)
                // console.log(action.payload.id)
                // console.log(index)

                return {
                    initialCart: state.initialCart - 1,
                        cartInfo: newItem
                }

                default:
                    return state
    }

}

export default cartReducer;