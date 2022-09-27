import React from "react"
import "./timeline.css"
import {Share} from "../share/Share";
import {Post} from "../post/Post";
import {Posts} from "../../DummyData";

export const TimeLine = () => {
    return (
        <div className="TimeLine">
            <div className="timelineWrapper">
                <Share/>
                {Posts.map((post)=>(<Post post={post} key={post.id}/>))}
            </div>
        </div>
    );
}