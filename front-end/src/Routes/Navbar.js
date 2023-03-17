import logo from "../Images/Aurora_University_logo.jpg";

const Navbar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <img src={logo} style={{height:'75px', margin:'0 0 0 15px'}} alt='aurora university logo'/>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="create">Create Form</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="ticket">Your Tickets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;