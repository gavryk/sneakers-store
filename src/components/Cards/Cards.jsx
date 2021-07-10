import Card from "./Card/Card";
import searchIcon from "../../img/search-icon.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Cards(props) {
    return (
        <div>
            <div className="cardsWrapper d-flex flex-wrap">
                {
                    props.sneakers
                        .filter(item => item.title.toLowerCase().includes(props.searchText.toLowerCase()))
                        .map((card, index) => {
                        return (
                            <Card
                                title={ card.title }
                                price={ card.price }
                                image={ card.image }
                                key={ index }
                                onLikeClick={ like => { props.addFavorite(like) } }
                                onPlusClick={ product => { props.addCart(product) } }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;