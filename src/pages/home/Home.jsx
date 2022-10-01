import {Topeber} from "../../components/topbar/Topeber";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {TimeLine} from "../../components/timeline/TimeLine";
import {Rightbar} from "../../components/rightbar/Rightbar";
import "../profile/Profile.css"

export const Home = () => {
    return (
        <>
            <Topeber/>
            <div className="Profile">
                <Sidebar />
                <TimeLine/>
                <Rightbar/>
            </div>
        </>
    )
}