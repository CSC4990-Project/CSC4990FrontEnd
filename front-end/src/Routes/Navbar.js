import logo from "../Images/Aurora_University_logo.jpg";
import {Link} from "react-router-dom";




const Navbar = (props) =>{

    const logout = async ()=>{
        await fetch("http://localhost:8000/api/logout",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })
        props.setName(undefined)
        props.setRedirect(false)
    }
    let menu;

    if(props.name !==undefined){
        menu =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Create Form</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/ticket">Your Tickets</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={logout}>Logout</Link>
                </li>
                <li className="nav-item">
                    {props.permission ? <Link className="nav-link" to="/register">Register</Link>:null}
                </li>
                <li className="nav-item">
                    {props.permission ? <Link className="nav-link" to="/tickets">All Tickets</Link>:null}
                </li>
            </ul>
        )
    }else{
        menu=(<ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            </ul>
        )
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <img src={logo} style={{height:'75px', margin:'0 0 0 15px'}} alt='aurora university logo'/>
                {menu}
            </div>
        </nav>
    )
}

export default Navbar;