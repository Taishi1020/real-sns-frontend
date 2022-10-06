import React, {useEffect, useState} from "react"
import "./timeline.css"
import {Share} from "../share/Share";
import axios from "axios";
import {Post} from "../post/Post";

export const TimeLine = () => {
    //状態管理
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("/posts/timeline/633915134470348694751aac")
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