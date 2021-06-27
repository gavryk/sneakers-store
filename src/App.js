import logo from '../src/img/sneakersLogo.png';
import cartIcon from '../src/img/cart-icon.svg';
import userIcon from '../src/img/user-icon.svg';
import plusIcon from '../src/img/plus.svg';

function App() {
    return (
        <div className="wrapper clear">
            <header className='d-flex justify-between p-40'>
                <div id="logo" className='d-flex align-center'>
                    <img className='logoImage mr-10' src={ logo } alt=""/>
                    <div className="logoText">
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <span className='opacity-5'>Shop of the Best Sneakers</span>
                    </div>
                </div>
                <ul className='rightHeader d-flex align-center'>
                    <li className='mr-30 d-flex align-center'>
                        <img className='icon mr-5' src={ cartIcon } alt=""/>
                        <span>500$</span>
                    </li>
                    <li>
                        <img className='icon' src={ userIcon } alt=""/>
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <h2 className='mb-40'>All Sneakers</h2>

                <div className="cardsWrapper d-flex justify-between">
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <img src='img/sneakers/1.png' alt=""/>
                            <h5>Nike Blazer Mid Suede</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>100$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <img src='img/sneakers/2.png' alt=""/>
                            <h5>Nike Blazer Mid Suede</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>150$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <img src='img/sneakers/3.png' alt=""/>
                            <h5>Nike Blazer Mid Suede</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>300$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardTop mb-15 text-center">
                            <img src='img/sneakers/4.png' alt=""/>
                            <h5>Nike Blazer Mid Suede</h5>
                        </div>
                        <div className="cardBottom d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>220$</b>
                            </div>
                            <button className='button'>
                                <img width={11} height={11} src={ plusIcon } alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
