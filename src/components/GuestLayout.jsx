import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import './Guest.css'

export default function GuestLayout() {
  const { userToken } = useStateContext()

  if (userToken) {
    return <Navigate to='/' />
  }
   
  return (
    <div className="background">
        <div className="card">
            <Outlet />
        </div>
    </div>
  )
}
