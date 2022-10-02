import "./post.css"
import {MoreVert} from "@mui/icons-material";
import {useEffect, useState} from "react";
import axios from "axios";

export const Post = ({post}) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const [like, setLike] = useState(0);
    const [user, setUser] = useState([]);

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
                        <img src={user.profilePicture} alt="" className="postProfileImg"/>
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.data}</span>
                    </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={PUBLIC_FOLDER + post.photo} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={hartButton}/>
                        <span className="postLikeCounter">{like}人がいいねを押しました</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}