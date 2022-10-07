import {Topeber} from "../../components/topbar/Topeber";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {TimeLine} from "../../components/timeline/TimeLine";
import {Rightbar} from "../../components/rightbar/Rightbar";
import "./Profile.css"

export const Profile = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <Topeber/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileRightCover">
                            <img src= {PUBLIC_FOLDER + "/post/3.jpeg"} alt="" className="profileCoverImg"/>
                            <img src={PUBLIC_FOLDER + "/person/5.jpeg"} alt="" className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Taishi</h4>
                            <span className="profileInfoDesc">私はReactエンジニアをやっております</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <TimeLine username="Tanaka"/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}