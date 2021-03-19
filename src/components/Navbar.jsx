import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>What's The Plan</h1>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/locations'>Locations</Link>
            </div>
        </nav>
    )
}

export default Navbar;