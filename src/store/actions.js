export default {
    addCart(context, payload) {
        let oldProduct = null;
        // 遍历一下cartList中的商品
        for (let item of context.state.cartList) {
            // 如果有之前添加的相同商品，就让oldProduct等于true
            if (item.iid === payload.iid) {
                oldProduct = item;
            }
        }
        if (oldProduct) {
            // oldProduct==true证明有这个商品，然后发送给mutations进行addcount方法
            context.commit('addcount', oldProduct)
        } else {
            // oldProduct！==true证明没有这个商品，所以赋值一个数量为1，然后再发给mutations往state中添加新商品
            payload.count = 1;
            context.commit('addtocart', payload)
        }
    }
}