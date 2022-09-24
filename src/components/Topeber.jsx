export const Topeber = () => {
    return (
        <dev className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Real SNS</span>
            </div>
            <div className="topbarCenter">
                <div className="serarchbar">
                    <input
                        type="text"
                        className="serchInput"
                        placeholder="探し物はなんですか？"
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarIconItem">1</div>
                <div className="topbarIconItem">2</div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
        </dev>
    )
}