import React, { useState } from 'react';
import auth from '../utils/auth';
import { login } from '../api/authAPI';
function Login() {
    const [error, setError] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
      });

    const handleLogin = async (e: any) =>
    {
        e.preventDefault();
         try {
            const data = await login(loginData);
            auth.login(data.token);
        } catch (err) {
            console.error(err);
            setError('An error occurred');
        }
    };
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setLoginData({
          ...loginData,
          [name]: value
        });
      };

    return (
        <div>
            <h1>Login</h1>
            <form  onSubmit={handleLogin}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;