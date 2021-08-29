export default {
    addcount(state, oldProduct) {
        oldProduct.count += 1;
    },
    addtocart(state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
}