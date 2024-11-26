import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-title">
        <Link to='/'>
          <h2>Main page nav bar</h2>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
