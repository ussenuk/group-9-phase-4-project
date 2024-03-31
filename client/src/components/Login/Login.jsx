import React, { useState, useContext } from 'react'; // import useContext
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { UserContext } from '../../UserContext' // import UserContext

function Login() {
  const { setUser } = useContext(UserContext); // use UserContext
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); //initialise useNavigate

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://127.0.0.1:5555/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then((user) => {
        console.log('User received from server:', user);
        setUser(user);
        navigate('/dashboard'); // navigate to dashboard after successful login
      })
      .catch((error) => {
        console.error('Error during login request:', error);
        setError('Incorrect username or password');
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out mt-4"  type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;