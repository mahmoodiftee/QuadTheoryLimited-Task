import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Popular from "./Popular/Popular";
import Recommended from "./Recommended/Recommended";

const Home = () => {
    return (
        <div className="max-w-7xl px-4 mx-auto">
            <Nav />
            <Banner/>
            <Popular/>
            <Recommended/>
        </div>
    );
};

export default Home;