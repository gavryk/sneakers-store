import Cards from "../../components/Cards/Cards";
import searchIcon from "../../img/search-icon.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Home({ searchText,
 changeValue,
 setSearchValue,
 addCart,
 addFavorite,
 sneakers }) {
    return (
        <div className="content p-30">
            <div className='mb-40 d-flex justify-between align-center'>
                <h2>{ searchText ? `Search: "${ searchText }"` : 'All Sneakers' }</h2>

                <div className="search-block d-flex align-center p-10">
                    <img src={ searchIcon } alt="Search" className='mr-10' />
                    {
                        searchText &&
                        <button className="button clear" onClick={ () => setSearchValue('') }>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    }
                    <input onChange={ changeValue } value={ searchText } type="text" placeholder='Search...'/>
                </div>
            </div>
            <Cards
                searchText={ searchText }
                changeValue={ changeValue }
                setSearchValue={ setSearchValue }
                addCart={ addCart }
                addFavorite={ addFavorite }
                sneakers={ sneakers }/>
        </div>
    )
}

export default Home;