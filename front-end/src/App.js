import{BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import About from "./Routes/About";
import Login from "./Routes/Login";
import Navbar from "./Routes/Navbar";
import Ticket from "./Routes/Ticket";
import Form from "./Routes/Form";
import Register from "./Routes/Register"
import {useEffect, useState} from "react";

function App() {
    const [name,setName] = useState('')
    const [fresh,setFresh] = useState(true)
    useEffect(()=>{
        (
            async ()=>{
                const response = await fetch("http://localhost:8000/api/user", {
                    method:"GET",
                    headers:{'Content-Type':'application/json'},
                    credentials:'include',
                })
                const content = await response.json()
                setName(content.email)
            }
        )();
    });
    return (
      <Router>
        <div className="App">
            <Navbar name={name} setName={setName}/>
            <div className={"content"}>
            <Switch>
              <Route exact path="/" component={()=><About name={name} fresh={fresh} setFresh={setFresh}/>}/>

              <Route exact path="/login" component={()=><Login name={name} setName={setName} setFresh={setFresh}/>}/>
                <Route exact path="/ticket">
                    <Ticket/>
                </Route>
                <Route exact path="/create">
                    <Form/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
