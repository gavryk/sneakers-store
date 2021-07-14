import React from "react";
import AppContext from "../../context";

const Info = ({ title, description, image }) => {
    const { handleCart } = React.useContext(AppContext);

    return (
        <div className="cart-empty d-flex justify-center align-center">
            <div>
                <img src={ image } alt="empty"/>
                <h1>{ title }</h1>
                <p>{ description }</p>
                <button onClick={ handleCart } className='btn greenBtn'>Back To Shop</button>
            </div>
        </div>
    )
}

export default Info;