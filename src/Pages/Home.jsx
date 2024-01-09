import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Popular from "./Popular/Popular";

const Home = () => {
    return (
        <div className="w-full">
            <Nav />
            <Banner/>
            <Popular/>
        </div>
    );
};

export default Home;