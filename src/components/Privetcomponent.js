import React from 'react'
import { Navigate, Outlet } from 'react-router'

const Privetcomponent = () => {
    const auth = localStorage.getItem('user')
  return auth ? <Outlet /> : <Navigate to='/signup' />
}

export default Privetcomponent
