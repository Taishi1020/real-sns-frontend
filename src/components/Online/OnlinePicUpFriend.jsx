export const OnlinePicUpFriend = ({user}) => {
    return (
        <>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img
                        src={user.profilePicture}
                        alt=""
                        className="sidebarFriendImg"
                    />
                    <span className="sidebarFrinedName">{user.username}</span>
                </li>
            </ul>
        </>
    )
}