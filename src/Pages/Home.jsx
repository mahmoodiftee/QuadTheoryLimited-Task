import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Popular from "./Popular/Popular";
import Recommended from "./Recommended/Recommended";

const Home = () => {
    return (
        <div className="w-full">
            <Nav />
            <Banner/>
            <Popular/>
            <Recommended/>
        </div>
    );
};

export default Home;