import { IoIosArrowUp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import profile from '../../assets/user.png'
const Nav = () => {
    return (
        <div className="flex gap-6 md:gap-10 justify-between px-3">
            <div className="flex-shrink mt-1.5">
                <span className="text-2xl md:text-4xl font-extrabold">pti.</span>
            </div>
            <div className="flex gap-1.5 md:gap-4 justify-center items-center max-w-screen-md w-full relative">
                <input type="text" placeholder="Search Audiobook" className="pl-8 md:pl-12 font-medium rounded-xl input w-full" />
                <IoSearch className="absolute left-2 md:left-4 text-xl text-orange" />
                <div className="dropdown dropdown-content">
                    <div tabIndex={0} className="flex bg-white py-[8px] md:py-[11px] md:px-5 rounded-xl justify-center items-center gap-5 pl-4 pr-1 md:gap-20"> <p className="text-lg font-semibold">MENU</p> <IoIosArrowUp className="text-orange font-extrabold text-2xl" /></div>
                    <ul tabIndex={0} className="dropdown-content -ml-[70px] md:-ml-0 mt-2 z-[1] menu p-2 shadow bg-base-100 rounded-box w-48">
                        <li><a>Home</a></li>
                        <li><a>Details</a></li>
                        <li><a>Category</a></li>
                        <li><a>My Favourites</a></li>
                        <li><a>Profile</a></li>
                        <li><a>Log in/Sign Up</a></li>
                    </ul>
                </div>
            </div>
            <div className="hidden md:block flex-shrink">
                <div className="avatar placeholder">
                    <div className="bg-[#fd6011] p-3 rounded-full w-12">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;