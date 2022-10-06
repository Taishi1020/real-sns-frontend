import "./post.css"
import {MoreVert} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";
import {format} from "timeago.js"



export const Post = ({post}) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const [like, setLike] = useState(post.likes.length);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users/${post.userId}`)
            setUser(response.data)
        };
        fetchUser();
    }, [])

    const hartButton = () => {
        setLike(like + 1)
    }

    return (
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"} alt=""
                             className="postProfileImg"/>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={hartButton}/>
                        <span className="postLikeCounter">{post.like}人がいいねを押しました</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}