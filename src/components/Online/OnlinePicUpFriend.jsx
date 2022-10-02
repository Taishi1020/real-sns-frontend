export const OnlinePicUpFriend = ({user}) => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img
                        src={PUBLIC_FOLDER + user.profilePicture}
                        alt=""
                        className="sidebarFriendImg"
                    />
                    <span className="sidebarFrinedName">{user.username}</span>
                </li>
            </ul>
        </>
    )
}