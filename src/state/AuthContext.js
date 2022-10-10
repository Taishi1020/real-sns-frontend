import {createContext, useReducer} from 'react'
import AuthReducer from './AuthReducer'

//最初のユーザー状態を定義
const initalState = {
    user: null,
    isFetching: false,
    error: false,
}

//状態をグローバルに管理する
export const AuthContext = createContext(initalState);

export const AuthContextProvider = ({children}) => {
    const [state, disPatch] = useReducer(AuthReducer, initalState);
    return(
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            disPatch,
        }}
        >
            {children}
        </AuthContext.Provider>
        )
}

