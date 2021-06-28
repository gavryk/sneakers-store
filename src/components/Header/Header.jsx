import logo from "../../img/sneakersLogo.png";
import cartIcon from "../../img/cart-icon.svg";
import heartIcon from "../../img/heart-unliked.svg";
import userIcon from "../../img/user-icon.svg";
import './Header.scss';

function Header() {
    return (
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
    )
}

export default Header;