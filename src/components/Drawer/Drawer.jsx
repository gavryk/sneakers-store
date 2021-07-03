import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Drawer(props) {
    return (
        <div className="drawer-overlay">
            <div className="drawer p-30 d-flex flex-column">
                <div className="mb-30 drawer-title d-flex justify-between align-center">
                    <h2>Cart</h2>
                    <button className="button removeBtn" onClick={ props.onClose }>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className="cart-items flex">
                    <div className="cart-item p-15 d-flex align-center justify-between mb-20">
                        <img
                            className='mr-10 cartItemImage'
                            width={70}
                            height={70}
                            src="img/sneakers/1.png"
                            alt="Sneaker"/>
                        <div className='mr-10'>
                            <h5 className='mb-5'>Nike Blazer Mid Suede </h5>
                            <b>100$</b>
                        </div>
                        <button className="button removeBtn">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>

                    <div className="cart-item p-15 d-flex align-center justify-between">
                        <img
                            className='mr-10 cartItemImage'
                            width={70}
                            height={70}
                            src="img/sneakers/1.png"
                            alt="Sneaker"/>
                        <div className='mr-10'>
                            <h5 className='mb-5'>Nike Blazer Mid Suede </h5>
                            <b>100$</b>
                        </div>
                        <button className="button removeBtn">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
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
            </div>
        </div>
    );
}

export default Drawer;