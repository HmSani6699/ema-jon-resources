const cartProductLoader = async () => {
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();
    return products
}

export default cartProductLoader;