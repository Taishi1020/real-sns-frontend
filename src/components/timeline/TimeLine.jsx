import React, {useEffect, useState} from "react"
import "./timeline.css"
import {Share} from "../share/Share";
import axios from "axios";
import {Post} from "../post/Post";

export const TimeLine = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("/posts/timeline/632bbd6d58346bcee5b44edb")
            setPosts(response.data)
        };
        fetchPosts();
    }, [])

    return (
        <div className="TimeLine">
            <div className="timelineWrapper">
                <Share/>
                {posts.map((post)=>(<Post post={post} key={post.id}/>))}
            </div>
        </div>
    );
}