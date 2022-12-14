import {createContext, useEffect, useReducer} from 'react'
import AuthReducer from './AuthReducer'

//最初のユーザー状態を定義
const initalState = {
    // user: null, //userがnullだとブラウザを更新するたびに、新規登録画面に遷移してしまう
    user: {
        user: JSON.parse(localStorage.getITem("user")) || null
        // _id: "632bbe0c58346bcee5b44edd",
        // username: "Taishi",
        // email: "Taishi@gmail.com",
        // password: "Taishi1999",
        // profilePicture: "/person/1.jpeg",
        // coverPicture: "",
        // followers: [],
        // followings: [],
        // isAdmin: false,
    },
    isFetching: false,
    error: false,
}

//状態をグローバルに管理する
export const AuthContext = createContext(initalState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initalState);

    useEffect(()=> {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

