import {Chat, Notifications, Search} from "@mui/icons-material";
import "./topebar.css"
import {Link} from "react-router-dom";
import {useContext} from 'react'
import {AuthContext} from '../../state/AuthContext'


export const Topeber = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const {user} = useContext(AuthContext);
    return (
        <dev className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none", color: "black"}}>
                    <span className="logo">Real SNS</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="serarchbar">
                    <Search className="searchIcon"/>
                    <input
                        type="text"
                        className="serchInput"
                        placeholder="探し物はなんですか？"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarIconItems">
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBage">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBage">2</span>
                    </div>
                    <Link to={`/profile/${user.username}`}>
                        <img src={
                            user.profilePicture
                                ? PUBLIC_FOLDER + user.profilePicture
                                : PUBLIC_FOLDER + "/person/noAvatar.png"}
                             alt=""
                             className="topbarImg"
                        />
                    </Link>
                </div>
            </div>
        </dev>
    )
}