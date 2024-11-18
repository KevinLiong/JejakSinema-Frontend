import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClient from '../axios.js'
import './Auth.css'

export default function Login() {
  const { setCurrentUser, setUserToken } = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({__html: ''});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({__html: ''});

    axiosClient.post('/login', {
      email,
      password,
    })
    .then(({ data }) => {
      setCurrentUser(data.user)
      setUserToken(data.token)
    })
    .catch((error) => {
      if (error.response) {
        const finalErrors = error.response.data.error
        setError({__html: finalErrors })
      }
      console.error(error)
    })
  }

  return (
    <>
        <h1 className="title">Login</h1>
        {error.__html && (<div className="errors" dangerouslySetInnerHTML={error}></div>)}
        <form onSubmit={onSubmit} className="form">
          <input name="email" type="email" placeholder="Email" required className="input-field" value={email} onChange={ev => setEmail(ev.target.value)}/>
          <input name="password" type="password" placeholder="Password" required className="input-field" value={password} onChange={ev => setPassword(ev.target.value)}/>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <p>
            { `Don't have an account?` } <Link to="/register" className="link">Register</Link>
        </p>
    </>
  )
}
