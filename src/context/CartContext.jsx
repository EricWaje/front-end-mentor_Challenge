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

    const clearCart = () => {
        setCart([]);
    };

    const totalUnidades = () => {
        return cart.reduce((prev, acc) => prev + acc.cantidad, 0);
    };

    const totalCart = () => {
        return cart.reduce((prev, acc) => prev + acc.cantidad * acc.price, 0);
    };

    const addCount = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
    };

    const substractCount = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                totalUnidades,
                totalCart,
                clearCart,
                addCount,
                substractCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
