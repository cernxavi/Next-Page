import { useState } from 'react';
import { login } from '../api/authAPI';
import AUTH from '../utils/auth';
import '../styles/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // setLoading(true);
    try {
      //  const res = await fetch('/auth/login', {
      //      method: 'POST',
      //      headers: { 'Content-Type': 'application/json' },
      //      body: JSON.stringify({ username, password }),
      //  });
      //  if (res.ok) {
      //      window.location.href = '/myBooks';
      //  } else {
      //      setError('Invalid username or password');
      //  }
      const res = await login({ username, password });
      AUTH.login(res.token);
      console.log(res);
    } catch (err) {
      console.error(err);
      setError('An error occurred');
    }
    // setLoading(false);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h3>Login</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)} required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
