import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import searchIcon from '../src/img/search-icon.svg';
import Header from "./components/Header/Header";
import Card from "./components/Cards/Card/Card";
import Cards from "./components/Cards/Cards";


function App() {
    return (
        <div className="wrapper clear">
            <div className="drawer-overlay" style={{ display: 'none' }}>
                <div className="drawer p-30 d-flex flex-column">
                    <div className="mb-30 drawer-title d-flex justify-between align-center">
                        <h2>Cart</h2>
                        <button className="button removeBtn">
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

            <Header/>

            <div className="content p-40">
                <div className='mb-40 d-flex justify-between align-center'>
                    <h2>All Sneakers</h2>

                    <div className="search-block d-flex align-center p-10">
                        <img src={ searchIcon } alt="Search" className='mr-10' />
                        <input type="text" placeholder='Search...'/>
                    </div>
                </div>

                <Cards />
            </div>
        </div>
    );
}

export default App;
