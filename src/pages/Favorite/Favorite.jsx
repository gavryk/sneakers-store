import React from "react";
import Card from "../../components/Cards/Card/Card";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import noBookmarks from "../../img/no-bookmarks.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppContext from "../../context";

function Favorite() {
    const { likedSneakers } = React.useContext(AppContext);

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
                    likedSneakers.length > 0
                    ? likedSneakers
                        .map((card, index) => {
                            return (
                                <Card
                                    {...card}
                                    key={ index }
                                />
                            )
                        })
                    : <div className='empty-block d-flex justify-center align-center text-center w100p'>
                            <div>
                                <img className='mb-10' src={ noBookmarks } alt=""/>
                                <h2 className='mb-10'>No bookmarks :(</h2>
                                <p className='mb-20'>You have not added anything to your bookmarks</p>
                                <button className='btn greenBtn'>
                                    <NavLink to="/">Back To Shop</NavLink>
                                </button>
                            </div>
                      </div>
                }
            </div>
        </div>
    )
}

export default Favorite;