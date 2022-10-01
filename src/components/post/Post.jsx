import "./post.css"
import {MoreVert} from "@mui/icons-material";
import {Users} from "../../DummyData";
import {useState} from "react";


export const Post = ({post}) => {
    const [like, setLike] = useState(0);
    const hartButton = () => {
        setLike(like + 1)
    }
    return (
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((user) => user.id === post.id)[0].profilePicture} alt="" className="postProfileImg"/>
                        <span className="postUsername">{Users.filter((user) => user.id === post.id)[0].username}</span>
                        <span className="postDate">{post.data}</span>
                    </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.desc}</span>
                    <img src={post.photo} alt="" className="postImg"/>
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