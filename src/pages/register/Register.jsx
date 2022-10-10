import "./Register.css"
import {loginCall} from '../../actionCalls'
import {useRef} from 'react'



export const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Real SNS</h3>
                    <span className="loginDesc">本格的なSNSを、自分の手で</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className="loginMsg">新規登録はこちら</p>
                        <input
                            type="text"
                            className="loginInput"
                            placeholder="ユーザー名"
                            required
                        />
                        <input
                            type="email"
                            className="loginInput"
                            placeholder="Eメール"
                            required
                        />
                        <input
                            type="password"
                            className="loginInput"
                            placeholder="パスワード"
                            required
                            minLength="6"
                        />
                        <input
                            type="password"
                            className="loginInput"
                            placeholder="確認用パスワード"
                            required
                            minLength="6"
                        />
                        <button className="loginButton" type="submit">サインアップ</button>
                        <button className="loginRegisterButton">ログイン</button>
                    </form>
                </div>
            </div>
        </div>
    )
}