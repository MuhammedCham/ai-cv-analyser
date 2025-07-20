import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="font-bold text-2xl text-gradient">CV-MIND</Link>
            <Link to="/upload" className="w-fit primary-button">Upload CV</Link>
        </nav>
    )
}
export default Navbar
