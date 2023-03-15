import {useState} from "react";
import {useHistory} from "react-router-dom";
import background from "../Images/auroraUniversity.jpg"
import logo from "../Images/Aurora_University_logo.jpg"
import "../App.css"
//create functionality with db
const Login = ()=>{
    const [email, setEmail] = useState("")
    const [pass,setPass] = useState("")
    const history = useHistory()

    function handleSubmit() {
        history.push("/")

    }

    return(

        <div style={{backgroundImage: `url(${background})`,
            width:'100%',
        height:'600px'}}>

        <div className="Login">
            <img src={logo} alt='aurora university logo'/>
            <form onSubmit={handleSubmit}>
                <label for="email">Email</label>

                <input value={email}onChange={(e)=> setEmail(e.target.value)} required/>
                <label for="password">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} required/>
                <button className={'button-content'} type="submit">Login</button>
            </form>
        </div>
        </div>
    )
}
export default Login;
