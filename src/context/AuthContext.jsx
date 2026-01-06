import React, { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

    const login = () => {
        localStorage.setItem("isLoggedIn", "true")
        navigate('/dashboard')
    }

    const logout = () => {
        localStorage.removeItem("isLoggedIn")
        navigate('/')
    }

    return (
        <AuthContext.Provider value = {{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)