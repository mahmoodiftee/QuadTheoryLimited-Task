import { IoIosArrowBack } from "react-icons/io";

const PrevArrow = ({ onClick }) => {
    return (
        <div className="hidden md:flex absolute right-[80px] -top-[55px]" onClick={onClick}>

            <div className="text-3xl font-extrabold cursor-pointer">
                <IoIosArrowBack />
            </div>
        </div>
    );
};

export default PrevArrow;