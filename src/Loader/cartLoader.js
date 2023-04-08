import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();

    const storedCart = getShoppingCart();
    const shopCart = [];
    for (const id in storedCart) {
        const getCart = products.find(product => product.id === id);
        if (getCart) {
            const quantity = storedCart[id];
            getCart.quantity = getCart.quantity + quantity;
        }
        shopCart.push(getCart)
    }
    return shopCart
}

export default cartProductLoader;