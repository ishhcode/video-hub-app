import React, { useState } from "react";
import { Search, Button, Logo, SearchForSmallScreen } from "../index.js";
import { Link } from "react-router-dom";
import {
    IoCloseCircleOutline,
    BiLike,
    CiSearch,
    CiSettings,
    HiOutlineVideoCamera,
    MdOutlineContactSupport,
    SlMenu,
} from "../icons.js";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const authStatus = useSelector((state) => state.auth.status);
    const username = useSelector((state) => state.auth?.userData?.username);
    const profileImg = useSelector((state) => state.auth.userData?.avatar.url);

    const sidePanelItems = [
        {
            icon: <BiLike size={25} />,
            title: "Liked Videos",
            url: "/liked-videos",
        },
        {
            icon: <HiOutlineVideoCamera size={25} />,
            title: "My Content",
            url: `/channel/${username}`,
        },
        {
            icon: <MdOutlineContactSupport size={25} />,
            title: "Support",
            url: "/support",
        },
        {
            icon: <CiSettings size={25} />,
            title: "Settings",
            url: "/settings",
        },
    ];

    return (
        <>
            <nav className="w-full h-[10vh] bg-[#393E46] flex justify-between items-center p-4 sm:gap-5 gap-2 border-b-2 border-gray-500 sticky top-0 z-50">
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <Logo />
                    
                </div>

                {/* search for large screens */}
                <div className="w-full sm:w-1/3 hidden sm:block">
                    <Search />
                </div>

                {/* search for small screens */}
                <div className="text-white w-full inline-flex justify-end sm:hidden pr-4">
                    <CiSearch
                        size={30}
                        fontWeight={"bold"}
                        onClick={() => setOpenSearch((prev) => !prev)}
                    />
                     {openSearch && (
                        <SearchForSmallScreen
                            open={openSearch}
                            setOpenSearch={setOpenSearch}
                        />
                    )}
                </div>
                  {/* login and signup butons for larger screens */}
                  {authStatus ? (
                    <div className="rounded-full sm:block hidden">
                        <img
                            src={profileImg}
                            alt="profileImg"
                            className="rounded-full w-10 h-10 object-cover"
                        />
                    </div>
                ) : (
                    <div className="space-x-2 sm:block hidden">
                    <Link to={"/login"}>
                            <Button className="bg-[#14181d]  font-semibold rounded-lg hover:bg-[#FD7014] hover:text-white  sm:px-4 sm:py-2 p-2">
                                Login
                            </Button>
                        </Link>
                        <Link to={"/signup"}>
                            <Button className="bg-[#14181d] text-stone-950 font-semibold  rounded-lg hover:bg-[#FD7014] hover:text-black  sm:px-4 sm:py-2 ">
                                Sign up
                            </Button>
                        </Link>
                    </div>
                )}


                {/* hamburger for smaller screens */}
                <div className="sm:hidden block">
                    <div className="text-white ">
                        <SlMenu
                            size={24}
                            onClick={() => setToggleMenu((prev) => !prev)}
                        />
                    </div>
                </div>

                {/* Side panel for smaller screens */}
                {toggleMenu && (
                    <div className="fixed right-0 top-0 text-white flex flex-col border-l h-screen w-5/6 bg-[#393E46] sm:hidden rounded-lg outline-none">
                        <div className="w-full border-b h-20 flex items-center mb-2 justify-between px-3">
                            <div className="flex items-center gap-2">
                                <Logo />
                                <span className="text-lg font-bold">YOUTUBE</span>
                            </div>
                            <IoCloseCircleOutline
                                size={35}
                                onClick={() => setToggleMenu((prev) => !prev)}
                            />
                        </div>
                        <div className="flex flex-col justify-between h-full py-5 px-3 j">
                            <div className="flex flex-col gap-5">
                                {sidePanelItems.map((item) => (
                                    <NavLink
                                        to={item.url}
                                        key={item.title}
                                        onClick={() =>
                                            setToggleMenu((prev) => !prev)
                                        }
                                        className={({ isActive }) =>
                                            isActive ? "bg-purple-500" : ""
                                        }
                                    >
                                        <div className="flex items-center border border-slate-500 gap-5 px-3 py-1 hover:bg-[#FD7014]">
                                            <div>{item.icon}</div>
                                            <span className="text-lg">
                                                {item.title}
                                            </span>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>

                        
                            {!authStatus && (
                                <div className="flex flex-col space-y-3 mb-3">
                                    <Link to={"/login"}>
                                        <Button className="bg-[#14181d] w-full font-semibold rounded hover:bg-[#FD7014] hover:text-white border-slate-500 py-2 px-3">
                                            Login
                                        </Button>
                                    </Link>
                                    <Link to={"/signup"}>
                                        <Button className=" bg-[#14181d] w-full text-stone-950 font-semibold  rounded hover:bg-[#FD7014] hover:text-black py-2 px-3">
                                            Sign up
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;