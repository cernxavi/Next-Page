import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-title">
        <Link to='/'>
          <h2>Main page nav bar</h2>
        </Link>

        <Link to='/recommend'>
          <h2>Recommendations</h2>
        </Link>

        <Link to='/myBooks'>
          <h2>My Books</h2>
        </Link>

        <Link to='/login'>
          <h2>Login</h2>
        </Link>

        <Link to='/signup'>
          <h2>Sign Up</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
