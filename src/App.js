import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Drawer from "./components/Drawer/Drawer";


function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <Cards />
        </div>
    );
}

export default App;
