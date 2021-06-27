import logo from '../src/img/sneakersLogo.png';
import cartIcon from '../src/img/cart-icon.svg';
import userIcon from '../src/img/user-icon.svg';
import heartIcon from './img/heart-unliked.svg';
import heartLikedIcon from './img/heart-liked.svg';
import checkedIcon from './img/checked-icon.svg';
import removeIcon from './img/remove-icon.svg';
import plusIcon from '../src/img/plus.svg';
import searchIcon from '../src/img/search-icon.svg';

function App() {
    return (
        <div className="wrapper clear">
            <div className="drawer-overlay">
                <div className="drawer p-30">
                    <h2 className='mb-30'>Cart</h2>

                    <div className="cart-items">
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
                                <img src={ removeIcon } alt="Remove"/>
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
                                <img src={ removeIcon } alt="Remove"/>
                            </button>
                        </div>
                    </div>

                    <ul className='cartTotalBlock'>
                        <li className='d-flex'>
                            <span>Total: </span>
                            <div></div>
                            <b>120$</b>
                        </li>
                        <li className='d-flex'>
                            <span>Tax 5%: </span>
                            <div></div>
                            <b>20$</b>
                        </li>
                    </ul>
                </div>
            </div>


            <header className='d-flex justify-between p-40'>
                <div id="logo" className='d-flex align-center'>
                    <img className='logoImage mr-10' src={ logo } alt=""/>
                    <div className="logoText">
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <span className='opacity-5'>Shop of the Best Sneakers</span>
                    </div>
                </div>
                <ul className='rightHeader d-flex align-center'>
                    <li className='mr-20 d-flex align-center'>
                        <img className='icon mr-5' src={ cartIcon } alt="Cart"/>
                        <span>500$</span>
                    </li>
                    <li className='mr-20'>
                        <img className='icon' src={ heartIcon } alt="Like"/>
                    </li>
                    <li>
                        <img className='icon' src={ userIcon } alt="User"/>
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <div className='mb-40 d-flex justify-between align-center'>
                    <h2>All Sneakers</h2>

                    <div className="search-block d-flex align-center p-10">
                        <img src={ searchIcon } alt="Search" className='mr-10' />
                        <input type="text" placeholder='Search...'/>
                    </div>
                </div>

                <div className="cardsWrapper d-flex justify-between">
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <button className='button button-like'>
                                <img width={11} height={11} src={ heartIcon } alt="Add"/>
                            </button>
                            <img width={130} height={130} src='img/sneakers/1.png' alt="Sneakers"/>
                            <h5>Nike Blazer Mid Suede</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>100$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt="Add"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <button className='button button-like'>
                                <img width={11} height={11} src={ heartIcon } alt="Add"/>
                            </button>
                            <img width={130} height={130} src='img/sneakers/2.png' alt="Sneaker"/>
                            <h5>Nike Air Max 270</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>150$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt="Add"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <button className='button button-like'>
                                <img width={11} height={11} src={ heartIcon } alt="Add"/>
                            </button>
                            <img width={130} height={130} src='img/sneakers/3.png' alt="Sneaker"/>
                            <h5>Nike Blazer Mid Suede</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>300$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt="Add"/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <button className='button button-like'>
                                <img width={11} height={11} src={ heartIcon } alt="Add"/>
                            </button>
                            <img width={130} height={130} src='img/sneakers/4.png' alt="Sneaker"/>
                            <h5>Puma X Aka Boku Future Rider</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>220$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt="Add"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
