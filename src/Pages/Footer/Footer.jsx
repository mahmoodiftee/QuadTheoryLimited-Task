import { MdArrowRightAlt } from "react-icons/md";
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import image from '../../assets/Image2.png'
const Footer = () => {
    return (
        <div className="bg-[#f49f23]  w-full ">
            <div className="grid md:grid-cols-12 h-full max-w-7xl mx-auto">
                <div className="md:col-span-7 relative h-full w-full px-4 md:px-0 pt-20 pb-32">
                    <div className="relative">
                        <input type="text" placeholder="Enter Your Email" className="pl-8 py-8 font-medium rounded-xl md:rounded-3xl text-[15px] md:text-lg input w-full" />
                        <button className="absolute top-[14px] md:top-[6.5px] right-3 flex md:bg-[#fc6011] text-[#fc6011] md:text-white text-[15px] rounded-3xl pl-10 pr-6 py-2 justify-center items-center md:text-xl font-semibold gap-2 md:gap-6">Subscribe <MdArrowRightAlt className=" md:text-4xl font-bold md:pt-1" /></button>
                    </div>
                    <div className="md:hidden flex justify-center items-center mt-12 mx-auto w-[45%]">
                        <button className="mx-auto rounded-full text-lg grid place-items-center p-3 text-white bg-[#fc6011]"><FaGoogle /></button>
                        <button className="mx-auto rounded-full text-lg grid place-items-center p-3 text-white bg-[#fc6011]"><FaTwitter /></button>
                        <button className="mx-auto rounded-full text-lg grid place-items-center p-3 text-white bg-[#fc6011]"><FaInstagram /></button>
                    </div>
                    <p className="text-4xl ml-2 mt-10 md:mt-24 md:text-5xl text-center md:text-start font-extrabold">pti<span className="text-[#fc6011]">.</span></p>
                    <p className="md:hidden text-center text-sm mt-6 md:text-xl font-extrabold">Copyright©Tripp.All Right Reserved</p>
                    <div className="hidden w-full md:flex justify-between items-center">
                        <p className="text-sm ml-6 mt-6 md:text-xl font-extrabold">Copyright©Tripp.All Right Reserved</p>
                        <div className="absolute -right-24 flex justify-center items-center gap-4">
                            <button className="mx-auto rounded-full text-2xl grid place-items-center p-4 bg-[#feddba] text-[#fc6011]"><FaGoogle /></button>
                            <button className="mx-auto rounded-full text-2xl grid place-items-center p-4 bg-[#feddba] text-[#fc6011]"><FaTwitter /></button>
                            <button className="mx-auto rounded-full text-2xl grid place-items-center p-4 bg-[#feddba] text-[#fc6011]"><FaInstagram /></button>
                        </div>
                    </div>
                </div>
                <div className="hidden relative md:flex md:col-span-5 h-full w-full pt-20 pb-32">
                    <img src={image} className="w-full absolute top-0 h-[80%] object-contain" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Footer;