import React from "react";

function Video({ src, poster }) {
    return (
        <>
            <video
                src={src}
                poster={poster}
                autoPlay
                controls
                playsInline
                className="sm:h-[68vh]  h-64 w-full object-contain"
            ></video>
        </>
    );
}

export default Video;