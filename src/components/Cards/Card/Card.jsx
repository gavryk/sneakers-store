import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import plusIcon from "../../../img/plus.svg";

function Card(props) {
    return (
        <div className="card mb-20">
            <div className="cardTop mb-15 text-center">
                <button className='button button-like'>
                    <FontAwesomeIcon icon={farHeart} />
                </button>
                <img width={130} height={130} src={ props.image } alt="Sneakers"/>
                <h5>{ props.name }</h5>
            </div>
            <div className="cardBottom d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                    <span>Price:</span>
                    <b>{ props.price }$</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src={ plusIcon } alt="Add"/>
                </button>
            </div>
        </div>
    )
}

export default Card;