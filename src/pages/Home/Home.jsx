import Cards from "../../components/Cards/Cards";

function Home(props) {
    return (
        <div className="content p-40">
            <Cards
                searchText={ props.searchText }
                changeValue={ props.changeValue }
                setSearchValue={ props.setSearchValue }
                addCart={ props.addCart }
                addFavorite={ props.addFavorite }
                sneakers={ props.sneakers }/>
        </div>
    )
}

export default Home;