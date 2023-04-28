import {Link, Redirect} from "react-router-dom";
import {useEffect, useState} from "react";
import "../App.css"

const Ticket = (props)=> {
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/userTicket/"+props.name, {
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

    if(data !== null) {
    data.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
    if (props.name === undefined) {
        return <Redirect to={"/login"}/>
    } else {
        return(<div className="about_all">
            <h1 className="title">Your Tickets</h1>
            <table className="table">
                <thead className={"tStripeEven"}>
                <tr className="tStripeEven">
                    <th className="tColor">Ticket Id</th>
                    <th className="tColor">Time Submitted</th>
                    <th className="tColor">Building</th>
                    <th className="tColor">Room Number</th>
                    <th className="tColor">Issue</th>
                    <th className="tColor">Category</th>
                    <th className="tColor">Ticket Progress</th>
                    <th className="tColor">Full Details</th>
                </tr>
                </thead>
                <tbody>
            {data !== null ? data.map((t,index)=>(
                <tr className={`${index %2 ===0 ? "tStripeEven" : "tStripedOdd"}`} key={t.id}>
                    <td className="tColor">{t.id}</td>
                    <td className="tColor">{t.timeSubmit}</td>
                    <td className="tColor">{t.building}</td>
                    <td className="tColor">{t.roomNum}</td>
                    <td className="tColor">{t.issue}</td>
                    <td className="tColor">{t.category}</td>
                    <td className="tColor">{t.progress}</td>
                    <td className="tColor"><Link className={` link ${index %2 ===0 ? "tStripeEven" : "tStripedOdd"}`} to={`/ticket/${t.id}`}>Full Details</Link></td>
                </tr>
                )): <h1 className="title about_all_ticket">No Tickets have been submitted</h1>}
                </tbody>
            </table>
        </div>)
    }
}

export default Ticket;