import Cards from "../../components/Cards/Cards";

function Home({ searchText,
 changeValue,
 setSearchValue,
 addCart,
 addFavorite,
 sneakers }) {
    return (
        <div className="content p-40">
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