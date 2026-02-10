import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>CommonGround</h1>
      <div className="nav-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/offers">Offers</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
