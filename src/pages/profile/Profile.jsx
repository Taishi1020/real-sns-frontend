import {Topeber} from "../../components/topbar/Topeber";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {TimeLine} from "../../components/timeline/TimeLine";
import {Rightbar} from "../../components/rightbar/Rightbar";
import "./Profile.css"
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"


export const Profile = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({});
    const username = useParams().username;
    console.log(username);


    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`/users?username=${username}`);
            setUser(response.data)
        };
        fetchUser();
    }, [])

    return (
        <>
            <Topeber/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileRightCover">
                            <img
                                src={ user.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"}
                                alt=""
                                className="profileCoverImg"
                            />
                            <img
                                src={user.coverPicture || PUBLIC_FOLDER + "/person/noAvatar.png"}
                                alt=""
                                className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <TimeLine username={username}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
                2
            </div>
        </>
    )
}