import {useState} from "react";
import {Redirect} from "react-router-dom";
import background from "../Images/auroraUniversity.jpg"
import logo from "../Images/Aurora_University_logo.jpg"
import "../App.css"
//create functionality with db
const Login = (props)=>{
    const [email, setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [redirect,setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault()


        const response = await fetch("http://localhost:8000/api/login", {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            body:JSON.stringify({
                'email':email,
                'password':pass
            })
        })
        const content = await response.json();
        setRedirect(true)
        props.setName(content.email)
    }
if(redirect){
    props.setFresh(false)
    return <Redirect to={"/"}/>
}
return(
    <div style={{backgroundImage: `url(${background})`,
            width:'100%',
            height:'600px'}}>
            <div className="Login">
                <img src={logo} alt='aurora university logo'/>
                <form onSubmit={submit}>
                    <input className="form-control w-100 p-2 mb-3 mt-4" value={email}onChange={(e)=> setEmail(e.target.value)}
                           placeholder="email" required/>
                    <input type="password" className="form-control w-100 p-2 mb-3" value={pass} onChange={(e)=>setPass(e.target.value)}
                           placeholder="password" required/>
                    <button className="btn btn-primary w-100 btn-lg  p-2 mb-3" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login;
