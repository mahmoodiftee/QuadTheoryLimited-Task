import Card from "./Card";
import Slider from "react-slick";
import PrevArrow from "./Arrows/PrevArrow";
import NextArrow from "./Arrows/NextArrow";

const Sliders = ({cards}) => {

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                }
            },
        ],
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <Card
                        key={index} 
                        img={card.ImageUrl}
                        name={card.Name}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Sliders;
