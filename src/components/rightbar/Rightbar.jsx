import "./rightbar.css"
import Online from "../Online/Online";
import {Users} from "../../DummyData";

export const Rightbar = ({profile}) => {

    const HomeRightbar = () => {
        return (
            <>
                <div className="eventContainer">
                    <img src="/assets/star.png" alt="" className="starImg"/>
                    <span className="eventText">
                        <b>フォロワー限定</b>イベント開催中
                    </span>
                </div>
                <img src="/assets/ad.jpeg" alt="" className="eventImg"/>
                <h4 className="rightbarTitle">オンラインの友達</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <Online user={user} key={user.id}/>
                    ))}
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/1.jpeg" alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Taishi</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/2.jpeg" alt="" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarusername">Tanka</span>
                    </li>
                </ul>
                <p className="promotionTitle">プロモーション広告</p>
                <img
                    src="/assets/promotion/promotion1.jpeg"
                    alt=""
                    className="rightbarPromotionImg"
                />
                <p className="promotionName">ショッピング</p>
                <img
                    src="/assets/promotion/promotion2.jpeg"
                    alt=""
                    className="rightbarPromotionImg"
                />
                <p className="promotionName">カーショッピング</p>
                <img
                    src="/assets/promotion/promotion3.jpeg"
                    alt=""
                    className="rightbarPromotionImg"
                />
                <p className="promotionName">Taishi Code株式会社</p>
            </>
        )
    }


    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">ユーザー情報</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">出身地:</span>
                        <span className="rightbarInfoKey">愛知</span>
                    </div>
                    <h4 className="rightbarTitle">あなたの友達</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Taishi</span>
                        </div>
                    </div>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Yuito</span>
                        </div>
                    </div>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Koushi</span>
                        </div>
                    </div>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Ryouta</span>
                        </div>
                    </div>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
                            <span className="rightbarFollowingName">Keiithirou</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}