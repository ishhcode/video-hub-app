import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

function Logo({ size = "30" }) {
    return (
        <>
            <Link to={'/'} className="flex gap-2 items-center">
            <IoLogoYoutube
                        size={35}
                        color="#FD7014"
                    />
                <span className="font-bold text-white">VIDEO HUB</span>
            </Link>
        </>
    );
}

export default Logo;