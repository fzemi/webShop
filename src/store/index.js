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
                item.quantity += tempItem.quantity
                state.tempCart = state.tempCart.filter(i => i.id !== product.id)
            }
            else {
                state.mainCart.push({...product, quantity: tempItem.quantity})
                state.tempCart = state.tempCart.filter(i => i.id !== product.id)
            }

            updateLocalStorage(state.mainCart)
        },
        removeFromCart(state, product) {
            let item = state.mainCart.find(i => i.id === product.id)

            if(item) {
                if(item.quantity > 1)
                    item.quantity--
                else
                    state.mainCart = state.mainCart.filter(i => i.id !== product.id)
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
        moneyToPay: state => {
            let money = 0

            for(let i = 0; i < state.mainCart.length; i++) {
                money += state.mainCart[i].price * state.mainCart[i].quantity
            }
            return money
        },
        visibleCartElements: state => {
            const result = state.mainCart.map((product) => {
                return {
                    id: product.id,
                    price: product.price,
                    name: product.name,
                    quantity: product.quantity
                }
            })
            return result
        },
        clearCart: state => {
            state.mainCart = []
            updateLocalStorage(state.mainCart)
        }
    },
    actions: {

    },
    modules: {

    }
})