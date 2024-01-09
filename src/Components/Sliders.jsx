import Card from "./Card";
import json from "../assets/data.json";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import PrevArrow from "./Arrows/PrevArrow";
import NextArrow from "./Arrows/NextArrow";

const Sliders = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(json);
    }, []);

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
                {cards.map((card) => <Card key={card.id} img={card.img} />)}
            </Slider>
        </div>
    );
};

export default Sliders;
