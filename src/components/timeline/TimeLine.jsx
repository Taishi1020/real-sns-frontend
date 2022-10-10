import React, {useContext, useEffect, useState} from "react"
import "./timeline.css"
import {Share} from "../share/Share";
import axios from "axios";
import {Post} from "../post/Post";
import {AuthContext} from '../../state/AuthContext'

export const TimeLine = ({username}) => {
    //状態管理
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
                ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
                : await axios.get(`/posts/timeline/${user._id}`) //ホームの場合
            setPosts(response.data)
        };
        fetchPosts();
    }, [username, user._id])

    return (
        <div className="TimeLine">
            <div className="timelineWrapper">
                <Share/>
                {posts.map((post) => (<Post post={post} key={post._id}/>))}
            </div>
        </div>
    );
}