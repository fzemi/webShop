import {createStore} from 'vuex'

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
    state: {
        mainCart: [],
        tempCart: []
    },
    mutations: {
        incrementQuantity(state, product) {
            let item = state.tempCart.find(i => i.id === product.id)

            if(item)
                item.quantity++
            else
                state.tempCart.push({...product, quantity: 1})

            updateLocalStorage(state.tempCart)
        },
        decrementQuantity(state, product) {
            let item = state.tempCart.find(i => i.id === product.id)

            if(item) {
                if(item.quantity > 1)
                    item.quantity--
                else
                    state.tempCart = state.tempCart.filter(i => i.id !== product.id)
            }

            updateLocalStorage(state.tempCart)
        },
        makeOrder(state, product) {
            let item = state.mainCart.find(i => i.id === product.id)
            let tempItem = state.tempCart.find(i => i.id === product.id)

            if(state.tempCart.length === 0)
                return

            if(item) {
                //console.log(state.tempCart)
                item.quantity += tempItem.quantity
                console.log(state.mainCart)
                state.tempCart = []
            }
            else {
                state.mainCart.push({...product, quantity: tempItem.quantity})
                state.tempCart = []
            }

            updateLocalStorage(state.mainCart)
        }
    },
    getters: {
        productQuantity: state => product => {
            let item = state.tempCart.find(i => i.id === product.id)

            if(item)
                return item.quantity
            else
                return 0
        },
        cartQuantity: state => {
            return state.mainCart.length
        },
        productQuantityInCart: state => product => {
            let item = state.mainCart.find(i => i.id === product.id)

            if(item)
                return item.quantity
            else
                return 0
        },
    },
    actions: {

    },
    modules: {

    }
})