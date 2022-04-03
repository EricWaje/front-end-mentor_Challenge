import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, cantidad) => {
        const productExists = cart.some((item) => item.id === product.id);
        if (productExists) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, cantidad }]);
        }
    };

    const totalUnidades = () => {
        return cart.reduce((prev, acc) => prev + acc.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{ addToCart, totalUnidades }}>
            {children}
        </CartContext.Provider>
    );
};
