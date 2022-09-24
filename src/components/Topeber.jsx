import {Chat, Notifications, Search} from "@mui/icons-material";


export const Topeber = () => {
    return (
        <dev className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Real SNS</span>
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
                <div className="topbarIconItem">
                    <Chat/>
                    1
                    <span className="topbarIconBage"></span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    2
                    <span className="topbarIconBage"></span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
        </dev>
    )
}