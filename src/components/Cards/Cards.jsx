import Card from "./Card/Card";
import searchIcon from "../../img/search-icon.svg";

function Cards(props) {
    return (
        <div className="content p-40">
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
                                onPlusClick={ () => { console.log(card) } }
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;