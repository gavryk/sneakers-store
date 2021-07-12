import Card from "./Card/Card";

function Cards(props) {
    return (
        <div>
            <div className="cardsWrapper d-flex flex-wrap">
                {
                    props.sneakers
                        .filter(card => card.title.toLowerCase().includes(props.searchText.toLowerCase()))
                        .map((card, index) => {
                        return (
                            <Card
                                {...card}
                                key={ index }
                                onLikeClick={ like => { props.addFavorite(like) } }
                                onPlusClick={ product => { props.addCart(product) } }
                                isFavorite={ props.isFavorite }
                                inCart
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;