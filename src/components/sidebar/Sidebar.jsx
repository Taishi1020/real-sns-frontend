import {Bookmark, Home, MessageRounded, Notifications, Person, Search, Settings} from "@mui/icons-material";


export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Home className="sidebarIcon"/>
                        <span className="sidarListItemText">ホーム</span>
                    </li>
                    <li className="sidebarListItem">
                        <Search className="sidebarIcon"/>
                        <span className="sidarListItemText">検索</span>
                    </li>
                    <li className="sidebarListItem">
                        <Notifications className="sidebarIcon"/>
                        <span className="sidarListItemText">お知らせ</span>
                    </li>
                    <li className="sidebarListItem">
                        <MessageRounded className="sidebarIcon"/>
                        <span className="sidarListItemText">メッセージ</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidarListItemText">ブックマーク</span>
                    </li>
                    <li className="sidebarListItem">
                        <Person className="sidebarIcon"/>
                        <span className="sidarListItemText">プロフィール</span>
                    </li>
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon"/>
                        <span className="sidarListItemText">設定</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
            </div>
        </div>
    )
}