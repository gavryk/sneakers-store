import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../img/sneakers-logo.png";
import cartIcon from "../../img/cart-icon.svg";
import heartIcon from "../../img/heart-unliked.svg";
import userIcon from "../../img/user-icon.svg";
import './Header.scss';

import AppContext from "../../context";
import {useCart} from "../../hooks/useCart";

function Header() {
    const { totalPrice } = useCart();
    const { handleCart } = React.useContext(AppContext);

    return (
        <header className='d-flex justify-between p-40'>
            <NavLink to='/'>
                <div id="logo" className='d-flex align-center'>
                    <img className='logoImage mr-10' src={ logo } alt=""/>
                    <div className="logoText">
                        <h3 className='text-uppercase'>Sneakers Store</h3>
                        <span className='opacity-5'>Shop of the Best Sneakers</span>
                    </div>
                </div>
            </NavLink>
            <ul className='rightHeader d-flex align-center'>
                <li className='mr-20 d-flex align-center cu-p' onClick={ handleCart }>
                    <img className='icon mr-5' src={ cartIcon } alt="Cart"/>
                    <span>{ totalPrice } $</span>
                </li>
                <li className='mr-20'>
                    <NavLink to="/favorite">
                        <img className='icon' src={ heartIcon } alt="Like"/>
                    </NavLink>
                </li>
                <li>
                    <img className='icon' src={ userIcon } alt="User"/>
                </li>
            </ul>
        </header>
    )
}

export default Header;