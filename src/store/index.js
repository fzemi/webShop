import {createStore} from 'vuex'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
    state: {
        cart: []
    },
    mutations: {
        incrementQuantity(state, product) {
            let item = state.cart.find(i => i.id === product.id)

            if(item) {
                item.quantity++
            } else {
                state.cart.push({...product, quantity: 1})
            }

            updateLocalStorage(state.cart)
        }
    },
    actions: {

    },
    modules: {

    }
})