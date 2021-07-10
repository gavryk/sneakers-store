import Card from "../../components/Cards/Card/Card";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Favorite(props) {
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
                    props.items
                        .map((card, index) => {
                            return (
                                <Card
                                    title={ card.title }
                                    price={ card.price }
                                    image={ card.image }
                                    key={ index }
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Favorite;