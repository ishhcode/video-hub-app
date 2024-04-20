import React, { useEffect } from "react";
import { VideoList } from "../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWatchHistory } from "../store/Slices/userSlice";
import HomeSkeleton from "../skeleton/HomeSkeleton"
function History() {
    const loading =  useSelector((state) => state.user?.loading);
    const videos = useSelector((state) => state.user?.history);
    const dispatch = useDispatch();
    console.log(videos);
    useEffect(() => {
        dispatch(getWatchHistory());
    }, [dispatch]);

    if (loading) {
        return <HomeSkeleton />
    }

    if (videos && videos.length > 0) {
        return (
            <>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 text-white">
                    {videos.map((video) => (
                        <Link
                            to={`/watch/${video._id}`}
                            key={video._id}
                        >
                            <VideoList
                                avatar={video.avatar?.url}
                                duration={video.duration}
                                title={video.title}
                                thumbnail={video.thumbnail?.url}
                                createdAt={video.createdAt}
                                // views={video.}
                            />
                        </Link>
                    ))}
                </div>
            </>
        );
    }
    return <></>;
}

export default History;