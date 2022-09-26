import React from "react"
import "./timeline.css"
import {Share} from "../share/Share";
import {Post} from "../post/Post";

export const TimeLine = () => {
    return (
        <div className="TimeLine">
            <div className="timelineWrapper">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}