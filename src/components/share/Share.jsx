import React, {useContext, useRef, useState} from "react"
import "./share.css"
import {Analytics, Face, Gif, Image} from "@mui/icons-material";
import {AuthContext} from '../../state/AuthContext'
import axios from 'axios'

export const Share = () => {
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
    const {user} = useContext(AuthContext);
    const desc = useRef();

    const [file, setFile] = useState([])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.img = fileName;
            try {
                await axios.post("/upload", data)
            }catch (e) {
                console.log(e)
            }
        }

        try {
            await axios.post("/posts", newPost)
            window.location.reload();
        }catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img
                        src={
                            user.profilePicture
                                ? PUBLIC_FOLDER + user.profilePicture
                                : PUBLIC_FOLDER + "/person/noAvatar.png"
                        }
                        className="ShareIcon"
                    />
                    <input
                        type="text"
                        className="shareInput"
                        placeholder="今何しているの？"
                        ref={desc}
                    />
                </div>
                <hr className="shareHr"/>
                <form className="shareButtons" onSubmit={(e) => handleSubmit(e.target.value)}>
                    <div className="shareOptions">
                        <label className="shareOption" htmlFor="file">
                            <Image className="shareIcon" htmlColor="blue"/>
                            <span className="shareOptionText">写真</span>
                            <input
                                type="file"
                                id="file"
                                accept=".png, .jpeg, .jpg"
                                style={{display: "none"}}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </label>
                        <div className="shareOption">
                            <Gif className="shareIcon"　htmlColor="hotpink"/>
                            <span className="shareOptionText">GIF</span>
                        </div>
                        <div className="shareOption">
                            <Face className="shareIcon" htmlColor="green"/>
                            <span className="shareOptionText">気持ち</span>
                        </div>
                        <div className="shareOption">
                            <Analytics className="shareIcon" htmlColor="red"/>
                            <span className="shareOptionText">投票</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">
                        投稿
                    </button>
                </form>
            </div>
        </div>
    )
}