import React from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {

  const { login } = useAuth()
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow w-80'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <button onClick={login} className='w-full bg-blue-600 text-white py-2 rounded hover:cursor-pointer'>Mock Login</button>
      </div>
    </div>
  )
}

export default Login
