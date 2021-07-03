import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import styles from './Card.module.scss';

function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    const handlePlus = () => {
        setIsAdded(!isAdded);
    }

    const handleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className={`${styles.card} mb-30 mr-20`}>
            <div className={ styles.cardTop + ' mb-15 text-center' }>
                <button className={`button ${styles.buttonLike} ${ isLiked ? styles.isLiked : '' }`} onClick={ handleLike }>
                    {
                        isLiked
                            ? <FontAwesomeIcon icon={faHeart} />
                            : <FontAwesomeIcon icon={farHeart} />
                    }
                </button>
                <img width={130} height={130} src={ props.image } alt="Sneakers"/>
                <h5>{ props.title }</h5>
            </div>
            <div className={styles.cardBottom + " d-flex justify-between align-center"}>
                <div className='d-flex flex-column'>
                    <span>Price:</span>
                    <b>{ props.price }$</b>
                </div>
                <button className={` ${styles.addProd} button ${isAdded ? styles.checked : '' }` } onClick={ handlePlus }>
                    {
                        isAdded
                            ? <FontAwesomeIcon icon={ faCheck } />
                            : <FontAwesomeIcon icon={ faPlus } />
                    }
                </button>
            </div>
        </div>
    )
}

export default Card;