import { signUpUser } from "../api/user";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(false);

  const handleSignup = async () => {
    try {
      const res = await signUpUser({ username, password });
      console.log(res);
      setSignup(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'text') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const formStyles = {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyles = {
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyles = {
    width: '100%',
    padding: '0.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Signup</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup();
        }}
        style={formStyles}
      >
        <input
          onChange={handleChanges}
          type="text"
          placeholder="Username"
          style={inputStyles}
        />
        <input
          onChange={handleChanges}
          type="password"
          placeholder="Password"
          style={inputStyles}
        />
        <button type="submit" style={buttonStyles}>
          Signup
        </button>
      </form>
      {signup && (
        <p className="text-success text-center mt-3">Signup successful!</p>
      )}
    </div>
  );
};

export default Signup;
