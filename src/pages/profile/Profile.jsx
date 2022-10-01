import {Topeber} from "../../components/topbar/Topeber";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {TimeLine} from "../../components/timeline/TimeLine";
import {Rightbar} from "../../components/rightbar/Rightbar";
import "./Profile.css"

export const Profile = () => {
    return (
        <>
            <Topeber/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileRightCover">
                            <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg"/>
                            <img src="/assets/person/5.jpeg" alt="" className="profileUserImg"/>
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Taishi</h4>
                            <span className="profileInfoDesc">私はReactエンジニアをやっております</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <TimeLine/>
                        <Rightbar/>
                    </div>
                </div>
            </div>
        </>
    )
}