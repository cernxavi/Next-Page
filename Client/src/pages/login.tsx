<<<<<<< HEAD
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
=======
// import React, { useState } from 'react';

// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleLogin = async () =>
//     {
//         setLoading(true);
//         try {
//             const res = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password }),
//             });
//             if (res.ok) {
//                 window.location.href = '/myBooks';
//             } else {
//                 setError('Invalid username or password');
//             }
//         } catch (err) {
//             console.error(err);
//             setError('An error occurred');
//         }
//         setLoading(false);
//     };
//     return (
//         <div>
//             <h1>Login</h1>
//             <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
//                 <div>
//                     <label>Username</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)} required
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)} required
//                     />
//                 </div>
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <button type='submit'>Login</button>
//             </form>
//         </div>
//     );
// }
>>>>>>> 3595936e5febbd82595e6037df6284beb94c1132

// export default Login;