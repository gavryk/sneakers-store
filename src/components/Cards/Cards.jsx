import Card from "./Card/Card";
import searchIcon from "../../img/search-icon.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Cards(props) {
    return (
        <div>
            <div className='mb-40 d-flex justify-between align-center'>
                <h2>{ props.searchText ? `Search: "${ props.searchText }"` : 'All Sneakers' }</h2>

                <div className="search-block d-flex align-center p-10">
                    <img src={ searchIcon } alt="Search" className='mr-10' />
                    {
                        props.searchText &&
                        <button className="button clear" onClick={ () => props.setSearchValue('') }>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    }
                    <input onChange={ props.changeValue } value={ props.searchText } type="text" placeholder='Search...'/>
                </div>
            </div>

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