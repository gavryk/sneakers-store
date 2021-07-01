import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import plusIcon from "../../../img/plus.svg";
import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    return (
        <div className={ styles.card }>
            <div className={ styles.cardTop + ' mb-15 text-center' }>
                <button className='button button-like'>
                    <FontAwesomeIcon icon={farHeart} />
                </button>
                <img width={130} height={130} src={ props.image } alt="Sneakers"/>
                <h5>{ props.title }</h5>
            </div>
            <div className={styles.cardBottom + " d-flex justify-between align-center"}>
                <div className='d-flex flex-column'>
                    <span>Price:</span>
                    <b>{ props.price }$</b>
                </div>
                <button className='button' onClick={ props.cardInfo }>
                    <img width={11} height={11} src={ plusIcon } alt="Add"/>
                </button>
            </div>
        </div>
    )
}

export default Card;