import React from "react";
import { useSelector } from "react-redux";
import { timeAgo } from "../helpers/timeAgo";
import Like from "./Like";

function TweetList({
    tweetId,
    avatar,
    username,
    createdAt,
    content,
    likesCount = 0,
    isLiked,
}) {
    const avatar2 = useSelector((state) => state.user?.profileData?.avatar.url);
    return (
        <>
            <div className="text-white w-full flex borde justify-start items-center sm:gap-5 gap-3 border-b border-slate-600 p-3 sm:p-5">
                <div className="w-10">
                    <img
                        src={avatar|| avatar2}
                        className="w-10 h-10 object-cover rounded-full"
                    />
                </div>
                <div className="w-3/4 flex flex-col gap-1 ">
                    <div className="flex items-center gap-2">
                        <h2 className="text-xs">{username}</h2>
                        <span className="text-xs text-slate-400">
                            {timeAgo(createdAt)}
                        </span>
                    </div>
                    <p className="text-sm">{content}</p>
                    <Like
                        isLiked={isLiked}
                        likesCount={likesCount}
                        tweetId={tweetId}
                        size={20}
                    />
                </div>
            </div>
        </>
    );
}

export default TweetList;