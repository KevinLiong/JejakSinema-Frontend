import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider.jsx'
import axiosClient from '../axios.js'
import './Auth.css'

export default function Register() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({__html: ''});
  
  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({__html: ''});

    axiosClient.post('/register', {
      name: username,
      email,
      password,
      password_confirmation: confirmPassword
    })
    .then(({ data }) => {
      setCurrentUser(data.user)
      setUserToken(data.token)
    })
    .catch((error) => {
      if (error.response) {
        const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...accum, ...next], [])
        console.log(finalErrors)
        setError({__html: finalErrors.join('<br>')})
      }
      console.error(error)
    })
  }

  return (
    <>
        <h1 className="title">Register</h1>

        {error.__html && (<div className="errors" dangerouslySetInnerHTML={error}></div>)}

        <form onSubmit={onSubmit}>
            <input name="username" type="text" placeholder="Username" required className="input-field" value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input name="email" type="email" placeholder="Email" required className="input-field" value={email} onChange={ev => setEmail(ev.target.value)}/>
            <input name="password" type="password" placeholder="Password" required className="input-field" value={password} onChange={ev => setPassword(ev.target.value)}/>
            <input name="password_confirmation" type="password" placeholder="Confirm Password" required className="input-field" value={confirmPassword} onChange={ev => setConfirmPassword(ev.target.value)}/>
            <button type="submit" className="submit-btn">Submit</button>
        </form>
        <p>
            Already have an account? <Link to="/login" className="link">Login</Link>
        </p>
    </>
  )
}
