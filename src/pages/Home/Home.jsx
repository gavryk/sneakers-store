import Cards from "../../components/Cards/Cards";
import searchIcon from "../../img/search-icon.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import styles from './Home.module.scss';

function Home({ searchText,
 changeValue,
 setSearchValue,
 addFavorite,
 sneakers,
 isLoading
}) {
    return (
        <div className={`${styles.homeWrapper} content p-30`}>
            <div className='mb-40 d-flex justify-between align-center flex-wrap'>
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
                addFavorite={ addFavorite }
                sneakers={ sneakers }
                isLoading={ isLoading }
            />
        </div>
    )
}

export default Home;