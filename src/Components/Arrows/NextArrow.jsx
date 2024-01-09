import { IoIosArrowForward } from "react-icons/io";

const NextArrow = ({ onClick }) => {
    return (
        <div className="absolute right-[5px] md:right-[30px] -top-[55px]" onClick={onClick}>
            <div className="text-3xl font-extrabold cursor-pointer">
                <IoIosArrowForward />
            </div>
        </div>
    );
};

export default NextArrow;