import {useState} from "react";
import {useHistory} from "react-router-dom";
import "../App.css"
//TODO Style login create functionality with db
const Login = ()=>{
    const [email, setEmail] = useState("")
    const [pass,setPass] = useState("")
    const history = useHistory()

    function handleSubmit() {
        history.push("/")

    }

    return(
        <div className="main-content">
            <form className={"form-content"} onSubmit={handleSubmit}>
                <label for="email">Email:</label>
                <input value={email}onChange={(e)=> setEmail(e.target.value)}/>
                <label for="password">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button className={'button-content'} type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;
