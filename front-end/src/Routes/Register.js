import {useState} from "react";
import "../App.css"
import {Redirect} from "react-router-dom";
import background from "../Images/auroraUniversity.jpg";

const Register = (props)=>{
    const [userType,setUserType] = useState("1")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[redirect,setRedirect] = useState(false)

    const submit = async (e)=> {
        e.preventDefault()
        await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "type": userType,
                "email": email,
                "password": password
            })

        })
        setRedirect(true)
    }
        if(redirect) {
            return <Redirect to={"/login"}/>
        }

    if(props.name === undefined){
        return <Redirect to={"/login"}/>
    }
    else {

        return (
            <div style={{backgroundImage: `url(${background})`,
                width:'100%',
                height:'600px'}}>

            <div className="Login">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal m-2 title">please register</h1>
                    <input type="email" className="form-control h-50 p-2 mb-3" placeholder="email address" required
                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" className="form-control h-50 p-2 mb-3" placeholder="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} required/>
                    <select defaultValue="1" className="form-select h-50 p-2 mb-3"
                            onChange={(e) => setUserType(e.target.value)}>
                        <option value="2">user</option>
                        <option value="1">admin</option>
                    </select>
                    <button className="btn btn-primary h-50 w-75 btn-lg  p-2 mb-3" type="submit">submit</button>
                </form>
            </div>
            </div>
        );
    }
};
export default Register;