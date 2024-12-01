<<<<<<< HEAD
import { useState } from 'react';

 function Login() {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);

     const handleLogin = async () =>
     {
         //setLoading(true);
         try {
             const res = await fetch('/api/login', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({ username, password }),
             });
             if (res.ok) {
                 window.location.href = '/myBooks';
             } else {
                 setError('Invalid username or password');
             }
         } catch (err) {
             console.error(err);
             setError('An error occurred');
         }
        // setLoading(false);
     };
     return (
         <div>
             <h1>Login</h1>
             <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                 <div>
                     <label>Username</label>
                     <input
                         type="text"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)} required
                     />
                 </div>
                 <div>
                     <label>Password</label>
                     <input
                         type="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)} required
                     />
                 </div>                 {error && <p style={{ color: 'red' }}>{error}</p>}
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
>>>>>>> main

// export default Login;