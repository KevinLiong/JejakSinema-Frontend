import { useStateContext } from '../contexts/ContextProvider'
import { Link, Navigate, Outlet } from 'react-router-dom'
import axiosClient from '../axios.js'

export default function DefaultLayout() {
  const { userToken, setCurrentUser, setUserToken } = useStateContext()

  if (!userToken) {
    return <Navigate to='/login'/>
  }

  const logout = (ev) => {
    ev.preventDefault()
    axiosClient.post('/logout')
    .then(() => {
      setCurrentUser({})
      setUserToken(null)
    })
  }

  return (
    <>
      <a href="#" onClick={(ev) => logout(ev)}>Logout</a>
      <Outlet />
    </>
  )
}
