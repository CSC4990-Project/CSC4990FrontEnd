import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import About from "./Routes/About";
import Login from "./Routes/Login";
import Navbar from "./Routes/Navbar";
import Ticket from "./Routes/Ticket";
import Create from "./Routes/Form";
import Register from "./Routes/Register"
import {useEffect, useState} from "react";
import AdminTicket from "./Routes/AdminTickets";
import TicketDetails from "./Routes/TicketDetails";


//TO DO Force the page to redirect to login get type from server
function App() {
    const [name,setName] = useState(undefined)
    const [permission,setPermission] = useState(1)
    const [fresh,setFresh] = useState(true)
    const [showReg,setShowReg] = useState(false);
    const [redirect,setRedirect] = useState(false)
    useEffect(()=>{
        (
            async ()=>{
                const response = await fetch("http://localhost:8000/api/user", {
                    method:"GET",
                    headers:{'Content-Type':'application/json'},
                    credentials:'include',
                })
                const content = await response.json()
                console.log(content)
                setName(content.email)
                setPermission(content.userType);
                if(permission === "admin"){
                    setShowReg(true);
                }else{
                    setShowReg(false)
                }
            }
        )();
    });

    return (
      <Router>
        <div className="App">
            <Navbar name={name} setName={setName} setRedirect={setRedirect} permission={showReg}/>
            <div className={"content"}>
            <Switch>
              <Route exact path="/" component={()=><About name={name} fresh={fresh} redirect={redirect} setFresh={setFresh}/>}/>
                <Route exact path="/login" component={()=><Login name={name} setRedirect={setRedirect} redirect={redirect} setName={setName} setFresh={setFresh}/>}/>
                <Route exact path="/ticket"component={()=><Ticket name={name}/>}/>
                <Route exact path="/tickets"component={()=><AdminTicket name={name}/>}/>
                <Route exact path="/create" component={()=><Create name={name}/>} />
                <Route exact path="/register" component={()=> <Register name={name}/>} />
                <Route exact path="/ticket/:id" component={()=><TicketDetails auth={showReg} name={name}/>}/>


            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
