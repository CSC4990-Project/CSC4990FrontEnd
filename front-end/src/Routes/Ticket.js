import {Redirect} from "react-router-dom";

const Ticket = (props)=>{
    if(props.name ===undefined){
        return <Redirect to={"/login"}/>
    }else {


        return (
            <div>
                <h1>this is the ticket</h1>
            </div>
        )
    }
}
export default Ticket;