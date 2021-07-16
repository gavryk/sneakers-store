import React from "react";
import AppContext from "../context";

export const useCart = () => {
    const { cartSneakers, setCartSneakers } = React.useContext(AppContext);

    let totalPrice = cartSneakers.reduce((sum, item) => {
        return item.price + sum;
    }, 0);

    return { cartSneakers, setCartSneakers, totalPrice }
}