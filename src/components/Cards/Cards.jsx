import React from "react";
import Card from "./Card/Card";

function Cards(props) {

    const renderSneakers = () => {
        //Filterd Items
        const filteredSneakers = props.sneakers.filter(card => card.title.toLowerCase().includes(props.searchText.toLowerCase()));

        return (
            props.isLoading
            ? [...Array(8)]
            : filteredSneakers)
            .map((card, index) => {
                return (
                    <Card
                        {...card}
                        key={ index }
                        loading={ props.isLoading }
                    />
                )
            })
    }

    return (
        <div>
            <div className="cardsWrapper d-flex flex-wrap">
                { renderSneakers() }
            </div>
        </div>
    )
}

export default Cards;