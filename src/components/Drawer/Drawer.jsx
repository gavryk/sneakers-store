import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import emptyImg from '../../img/empty-cart.png';

function Drawer({ onClose, onRemoveItem, items = [] }) {
    return (
        <div className="drawer-overlay">
            <div className="drawer p-30 d-flex flex-column">
                <div className="mb-30 drawer-title d-flex justify-between align-center">
                    <h2>Cart</h2>
                    <button className="button removeBtn" onClick={ onClose }>
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
                                        <b>120$</b>
                                    </li>
                                    <li>
                                        <span>Tax 5%: </span>
                                        <div></div>
                                        <b>20$</b>
                                    </li>
                                </ul>
                                <button className='btn greenBtn'>To Order</button>
                            </div>
                        </>
                        : <div className="cart-empty d-flex justify-center align-center">
                            <div>
                                <img src={ emptyImg } alt="empty"/>
                                <h1>Cart Empty</h1>
                                <p>Add at least one pair of sneakers to order.</p>
                                <button onClick={ onClose } className='btn greenBtn'>Back To Shop</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default Drawer;