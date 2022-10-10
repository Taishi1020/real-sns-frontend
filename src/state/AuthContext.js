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

export const AutchContextProvider = () =>{
    const [state, disPatch] = useReducer(AuthReducer,initalState);
}

