import{BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import About from "./Routes/About";
import Login from "./Routes/Login";
import Navbar from "./Routes/Navbar";
import Ticket from "./Routes/Ticket";
import Form from "./Routes/Form";

function App() {
    return (
      <Router>
        <div className="App">
            <Navbar/>
            <div className={"content"}>
            <Switch>
              <Route exact path="/">
                  <About/>
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
                <Route exact path="/ticket">
                    <Ticket/>
                </Route>
                <Route exact path="/create">
                    <Form/>
                </Route>
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
