import Card from "./Card/Card";
import searchIcon from "../../img/search-icon.svg";

const sneakers = [
    {name: 'Nike Blazer Mid Suede', image: 'img/sneakers/1.png', price: 1000,},
    {name: 'Nike Air Max 270', image: 'img/sneakers/2.png', price: 800,},
    {name: 'Nike Blazer Mid Suede', image: 'img/sneakers/3.png', price: 1200,},
    {name: 'Puma X Aka Boku Future Rider', image: 'img/sneakers/4.png', price: 1500,},
];

function Cards() {
    return (
        <div className="content p-40">
            <div className='mb-40 d-flex justify-between align-center'>
                <h2>All Sneakers</h2>

                <div className="search-block d-flex align-center p-10">
                    <img src={ searchIcon } alt="Search" className='mr-10' />
                    <input type="text" placeholder='Search...'/>
                </div>
            </div>

            <div className="cardsWrapper d-flex justify-between flex-wrap">
                {
                    sneakers.map(card => {
                        return (
                            <Card name={ card.name } price={ card.price } image={ card.image } />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards;