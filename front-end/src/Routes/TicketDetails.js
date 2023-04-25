import {Redirect, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import "../App.css"
import moment from "moment/moment";


const TicketDetails = (props)=>{
    const {id} = useParams()
    const [data, setData] = useState([]);
    const [progress,setProgress] = useState(null)
    const [severity,setSeverity] = useState(null)
    const [notes,setNotes] = useState()
    const [redirect,setRedirect] = useState(false)


    const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/tickets/"+id, {
            method:"GET",
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };



    useEffect(() => {
        fetchData();
    }, []);

    const submit = async (e) => {
        e.preventDefault()
        let totalnotes = notes +"\n"+ data.internalComments
        await fetch("http://127.0.0.1:8000/api/update/" + data.id, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "severity": severity,
                "progress": progress,
                "internalComments": totalnotes,
                "timeUpdated": moment().format("YYYY-MM-DD h:mm:ss"),
            })
        }).then(function (err) {
            alert("ticket submitted")
            setRedirect(true)
        }).catch(function (error) {
            alert("error")
            console.log(error)
        })
    }
    if(redirect === true){
        return <Redirect to={"/tickets"}/>
    }
    if (props.name === undefined) {
        return <Redirect to={"/"}/>
    }else {
        return (
            <div className="about_all_ticket">
            <span className="title ">Ticket #{data.id}</span>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Building: {data.building}</h3>
                        </div>
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Location Category: {data.category}</h3>
                        </div>
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Room Number: {data.roomNum}</h3>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Issue: {data.issue}</h3>
                        </div>
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Severity: {data.severity}</h3>
                        </div>
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Progress: {data.progress}</h3>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Submitted by: {data.user}</h3>
                        </div>
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">User Comments: {data.userComments}</h3>
                        </div>
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Tech Comments: {data.internalComments}</h3>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Submitted: {data.timeSubmit}</h3>
                        </div>
                        <div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Last Updated: {data.timeFinished}</h3>
                        </div>
                        {data.image !== "" ?<div className="col-4 tColor">
                            <h3 className="tColor h3 m-3">Photo</h3>
                            <img className="tColor h3" width='250px' height='200px' src={data.image} alt="image"/>
                        </div>:null}
                    </div>
                    {props.auth ?
                        <div>
                            <form onSubmit={submit}>
                        <div className="row">
                        <h1 className="title">Edit Form</h1>

                            <div className="col-4">
                                <label htmlFor="progress" className="labelLeft">Progress</label>
                            </div>
                            <div className="col-4">
                                <label htmlFor="severity" className="labelLeft">Severity</label>
                            </div>
                            <div className="col-4">
                                <label htmlFor="notes" className="labelLeft">Tech Notes</label>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-4">
                                <select className="m-3 form-select" onChange={(e) => setProgress(e.target.value) }
                                        value={progress}  required>
                                    <option value="" hidden></option>
                                    <option value="1">Not Started</option>
                                    <option value="2">Started</option>
                                    <option value="3">On Hold</option>
                                    <option value="4">Finished</option>
                                </select>
                                </div>
                                <div className="col-4">
                                <select className="m-3 form-select" onChange={(e) => setSeverity(e.target.value)}
                                        value={severity} defaultValue={data.severityID} required>
                                    <option value="" hidden></option>
                                    <option value="1">Low</option>
                                    <option value="2">High</option>
                                    <option value="3">Not Started</option>

                                </select>
                                </div>
                            <div className="col-4">
                                <textarea value={notes}
                                          onChange={(e) => setNotes(e.target.value)}  className="w-100 m-3 text" required/>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <button type="submit" className="btn btn-light">Submit</button>
                                </div>
                            </div>

                        </div>
                            </form>
                        </div>:null }
                </div>
        </div>)
    }
}
export default TicketDetails