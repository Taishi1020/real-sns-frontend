import "./post.css"
import {MoreVert} from "@mui/icons-material";

export const Post = (props) => {
    const {post} = props
    return (
        <div className="Post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg"/>
                        <span className="postUsername">Taishi</span>
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
                        <img src={post.photo} alt="" className="likeIcon"/>
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