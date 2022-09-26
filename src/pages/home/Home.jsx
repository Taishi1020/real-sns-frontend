import {Topeber} from "../../components/topbar/Topeber";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {TimeLine} from "../../components/timeline/TimeLine";
import {Rightbar} from "../../components/rightbar/Rightbar";
import "./Home.css"

export const Home = () => {
    return (
        <>
            <Topeber/>
            <div className="homeContainer">
                <Sidebar />
                {/*<TimeLine/>*/}
                {/*<Rightbar/>*/}
            </div>
        </>
    )
}