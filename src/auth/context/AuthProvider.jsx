import React from 'react';
import { AuthContext } from './AuthContext';
import { useReducer } from 'react';
import { authReducer } from './authReducer';

import { types } from '../types/types';

const initialState = {
    logged: false,
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState );

    const onLogin = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: name
        }
        dispatch(action);
    }
    
    return (
        <AuthContext.Provider value={{ 
            ...authState,
            login: onLogin 
            }}>
            {children}
        </AuthContext.Provider>
    )
}
