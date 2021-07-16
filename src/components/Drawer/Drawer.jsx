import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Info from "../Info/Info";
import AppContext from "../../context";
import emptyImg from "../../img/empty-cart.png";
import orderCompleteImg from "../../img/complete-order-img.png";
import axios from "axios";
import {useCart} from "../../hooks/useCart";

function Drawer({ onRemoveItem, items = [] }) {
    const { cartSneakers, setCartSneakers, totalPrice } = useCart();
    const { handleCart, apiURL } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(`${apiURL}/order`, {
                items: cartSneakers
            });

            //MockApi bug - do not allow this to happen
            //Clear Cart in Server Side (MockApi)
            // await axios.put(`${apiURL}/cart`, {});
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartSneakers([]);

            //solution
            // cartSneakers.forEach((item) => {
            //     axios.delete(`${apiURL}/cart/${item.id}`)
            // })

            //Optional solution so as not to get banned from MockApi
            for (let i = 0; i < cartSneakers.length; i++) {
                const item = cartSneakers[i];
                await axios.delete(`${apiURL}/cart/${item.id}`);
                await delay(1000);
            }

        } catch(err) {
            alert(err);
        }
        setIsLoading(false);
    }

    return (
        <div className="drawer-overlay">
            <div className="drawer p-30 d-flex flex-column">
                <div className="mb-30 drawer-title d-flex justify-between align-center">
                    <h2>Cart</h2>
                    <button className="button removeBtn" onClick={ handleCart }>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                {
                    items.length > 0
                        ? <>
                            <div className="cart-items d-flex flex-column flex">
                                {
                                    items.map((item, index )=> {
                                        return (
                                            <div
                                                key={ index + 'dx' }
                                                className="cart-item p-15 d-flex align-center justify-between mb-20">
                                                <img
                                                    className='mr-10 cartItemImage'
                                                    width={70}
                                                    height={70}
                                                    src={ item.image }
                                                    alt="Sneaker"/>
                                                <div className='mr-10'>
                                                    <h5 className='mb-5'>{ item.title }</h5>
                                                    <b>{ item.price }$</b>
                                                </div>
                                                <button className="button removeBtn" onClick={ () => onRemoveItem(item.id) }>
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='cartTotalBlock'>
                                <ul className='mb-20'>
                                    <li>
                                        <span>Total: </span>
                                        <div></div>
                                        <b>{ totalPrice } $</b>
                                    </li>
                                    <li>
                                        <span>Tax 5%: </span>
                                        <div></div>
                                        <b>{ totalPrice * 0.05 } $</b>
                                    </li>
                                </ul>
                                <button disabled={ isLoading } onClick={ onClickOrder } className='btn greenBtn'>To Order</button>
                            </div>
                        </>
                        : <Info
                            title={isOrderComplete ? 'Order Complete' : 'Cart Is Empty' }
                            description={ isOrderComplete ? `Your order #${ orderId } will be delivered by courier soon.` : 'Add at least one pair of sneakers to order.'}
                            image={ isOrderComplete ? orderCompleteImg : emptyImg }/>
                }
            </div>
        </div>
    );
}

export default Drawer;