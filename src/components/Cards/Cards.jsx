import Card from "./Card/Card";
import searchIcon from "../../img/search-icon.svg";

function Cards(props) {
    return (
        <div>
            <div className='mb-40 d-flex justify-between align-center'>
                <h2>All Sneakers</h2>

                <div className="search-block d-flex align-center p-10">
                    <img src={ searchIcon } alt="Search" className='mr-10' />
                    <input type="text" placeholder='Search...'/>
                </div>
            </div>

            <div className="cardsWrapper d-flex flex-wrap">
                {
                    props.sneakers.map((card, index) => {
                        return (
                            <Card
                                title={ card.title }
                                price={ card.price }
                                image={ card.image }
                                key={ ++index }
                                onLikeClick={ () => { alert('Add To Favorite Products') } }
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