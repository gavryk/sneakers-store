import React from "react";
import Card from "../../components/Cards/Card/Card";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppContext from "../../context";

function Favorite(props) {
    const { likedSneakers, onAddFavorite, isSneakersLiked } = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40">
                <Link to="/" className='mr-15'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Link>
                <h2>Favorites</h2>
            </div>

            <div className="cardsWrapper d-flex flex-wrap">
                {
                    likedSneakers
                        .map((card, index) => {
                            return (
                                <Card
                                    {...card}
                                    key={ index }
                                    onLikeClick={ like => { onAddFavorite(like) } }
                                    isFavorite={ true }
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Favorite;