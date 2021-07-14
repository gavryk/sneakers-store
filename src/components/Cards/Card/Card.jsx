import React from 'react';
import ContentLoader from "react-content-loader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import styles from './Card.module.scss';

import AppContext from "../../../context";

function Card({
  id,
  image,
  title,
  price,
  onLikeClick,
  onPlusClick,
  isFavorite = false,
  loading = false
}) {
    const obj = { id, parentId: id, title, image, price };
    const { isSneakersAdded } = React.useContext(AppContext)
    const [isLiked, setIsLiked] = React.useState(isFavorite);

    const handlePlus = () => {
        onPlusClick(obj);
    }

    const handleLike = () => {
        onLikeClick(obj);
        setIsLiked(!isLiked);
    }

    return (
        <div className={`${styles.card} mb-30 mr-20`}>
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={190}
                        height={265}
                        viewBox="0 0 170 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="127" y="97" rx="0" ry="0" width="5" height="1" />
                        <rect x="2" y="9" rx="10" ry="10" width="150" height="150" />
                        <rect x="0" y="171" rx="5" ry="5" width="152" height="15" />
                        <rect x="0" y="195" rx="5" ry="5" width="100" height="15" />
                        <rect x="0" y="227" rx="5" ry="5" width="100" height="25" />
                        <rect x="120" y="223" rx="5" ry="5" width="32" height="32" />
                    </ContentLoader>
                    : <>
                        <div className={ styles.cardTop + ' mb-15 text-center' }>
                            <button className={`button ${styles.buttonLike} ${ isLiked ? styles.isLiked : '' }`} onClick={ handleLike }>
                                {
                                    isLiked
                                        ? <FontAwesomeIcon icon={faHeart} />
                                        : <FontAwesomeIcon icon={farHeart} />
                                }
                            </button>
                            <img width={130} height={130} src={ image } alt="Sneakers"/>
                            <h5>{ title }</h5>
                        </div>
                        <div className={styles.cardBottom + " d-flex justify-between align-center"}>
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b>{ price }$</b>
                            </div>
                            <button className={` ${styles.addProd} button ${ isSneakersAdded(id) ? styles.checked : '' }` } onClick={ handlePlus }>
                                {
                                    isSneakersAdded(id)
                                        ? <FontAwesomeIcon icon={ faCheck } />
                                        : <FontAwesomeIcon icon={ faPlus } />
                                }
                            </button>
                        </div>
                    </>

            }
        </div>
    )
}

export default Card;