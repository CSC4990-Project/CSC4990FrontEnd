import '../App.css';
import {Redirect} from "react-router-dom";
import {useState} from "react";



const Create = (props)=> {
    const[bName,setBName] = useState("1")
    const[category,setCategory] = useState("1")
    const[issue,setIssue] = useState("1")
    const[roomNum,setRoomNum] = useState("1")
    const[image,setImage] = useState(null)
    const[imageB,setImageB] = useState(null)
    const[redirect,setRedirect] = useState(false)

    const[comments,setComments] = useState("None")
    const submit = async (e)=> {
        e.preventDefault()
        console.log(props.name)
        await fetch("http://localhost:8000/api/submit", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "user":props.name,
                "building": bName,
                "category": category,
                "issue": issue,
                "roomNumber": roomNum,
                "userComments": comments,
                "image": imageB
            })

        }).then(function (err){
            alert("ticket submitted")
            setRedirect(true)
        }).catch(function (error){
            console.log(error)
        })

        setRedirect(true)
    }
    const convertToBase64 = (file) => {
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => {
            console.log('called: ', reader.result)

            setImageB(reader.result)
        }
    }
    console.log(redirect)
    if(redirect === true){
        return <Redirect to={"/ticket"}/>
    }
  if(props.name === undefined){
    return <Redirect to={"/login"}/>
  }
  else{
  return(

      <div className="about_all">
          <div className="container-fluid backColor">
          <div className="row">
          <h2 className="title">Report-A-Problem</h2>
          </div>
        <form className="backColor" onSubmit={submit} >
            <div className="row">
                <div className="col-4">
                <label htmlFor="BuildingName" className="labelLeft">Building Name</label>
                </div>
                <div className="col-4">
                    <label htmlFor="category" className="labelLeft">Category</label>
                </div>
                <div className="col-4">
                    <label htmlFor="Issue" className="labelLeft">Issue</label>
                </div>
            </div>
    <div className="row">
        <div className="col-4">
            <select className="m-3 form-select" aria-label = "Default select building" value={bName}
                    onChange={(e) => setBName(e.target.value)} required>
                         <option> Building </option>
                         <option value = "1"> Dunham Hall </option>
                         <option value = "2"> Eckart Hall </option>
                         <option value = "3"> Stephens Hall </option>
                         <option value = "4"> Alumni Hall </option>
                         <option value = "5"> Birck Collaboration Center for Innovation </option>
                         <option value = "6"> Bookstore </option>
                         <option value = "7"> Institute for Collaboration </option>
                    </select>
        </div>
        <div className="col-4">
            <select className="m-3 form-select" value={category}
                    onChange={(e) => setCategory(e.target.value)} aria-label = "Default Category">
                       <option> Category </option>
                       <option value = "1"> Bathroom </option>
                       <option value = "2"> Classroom </option>
                       <option value = "3"> Outside </option>
                       <option value = "4"> Hallway </option>
                     </select>
        </div>
        <div className="col-4">
            <select className="m-3 form-select" value={issue}
                    onChange={(e) => setIssue(e.target.value)} aria-label = "Default select issue">
                   <option> Issue </option>
                   <option value = "1"> Paper Towels Missing </option>
                   <option value = "2"> No Soap </option>
                   <option value = "3"> No Tissues </option>
                   <option value = "4"> Spill </option>
                   <option value = "5"> Clogged </option>
                   <option value = "6"> Not Clean </option>
                   <option value = "7"> Network/Web Issue </option>
                   <option value = "8"> Equipment Issue </option>
                   <option value = "9"> Something is Broken </option>
                   <option value = "10"> Temperature Issue </option>
                   <option value = "11"> Trash </option>
                   <option value = "12"> Water Fountain/Refill </option>
                 </select>
        </div>
    </div>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="roomNumber" className="labelLeft">Room Number</label>
                </div>
                <div className="col-4">
                    <label htmlFor="Image" className="labelLeft">Image</label>
                </div>


            </div>
            <div className="row">
                <div className="col-4">
                    <select className="m-3 form-select" value={roomNum}
                            onChange={(e) => setRoomNum(e.target.value)} aria-label = "Default Room Number">
                             <option> Room </option>
                             <option value = "1"> 204 </option>
                             <option value = "2"> 206 </option>
                             <option value = "3"> 208 </option>
                             <option value = "4"> 210 </option>
                             <option value = "5"> 212 </option>
                           </select>
                </div>
                <div className="col-4">
                    <input type="file" onChange={(e) =>{ console.log(e.target.files[0]); convertToBase64(e.target.files[0]);setImage(e.target.files[0])}} className="m-3 input"/>
                </div>
                <div className="col-4">
                    <button type="submit" className="w-50 btn btn-light">Submit</button>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="Comments" className="labelLeft">Comments</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <textarea value={comments}
                                  onChange={(e) => setComments(e.target.value)} className="w-100 m-3 text"/>
                    </div>
                    <div className="col-4">
                        {image && (
                            <div className="labelLeft">
                                <img
                                    alt="not found"
                                    width={"350px"}
                                    height={"200px"}
                                    src={URL.createObjectURL(image)}
                                />
                                <button className="btn m-3 btn-light" onClick={() => setImage(null)}>Remove</button>
                            </div>
                        )}

                </div>
                </div>
            </div>


        </form>


          </div>
      </div>

    // <Form>
    //
    //   <h1 className='title_form'> Report-A-Problem </h1>
    //     <Form.Label> Building Name: </Form.Label>
    //     <Form.Select aria-label = "Default select building">
    //         <option> Building </option>
    //         <option value = "1"> Dunham Hall </option>
    //         <option value = "2"> Eckart Hall </option>
    //         <option value = "3"> Stephens Hall </option>
    //         <option value = "4"> Alumni Hall </option>
    //         <option value = "5"> Birck Collaboration Center for Innovation </option>
    //         <option value = "6"> Bookstore </option>
    //         <option value = "7"> Institute for Collaboration </option>
    //     </Form.Select>
    //
    //
    //   <Form.Group as = { Row } className = "category" controlId = "formGridCategory">
    //     <Form.Label> Category Selection: </Form.Label>
    //     <Form.Select aria-label = "Default Category">
    //       <option> Category </option>
    //       <option value = "1"> Bathroom </option>
    //       <option value = "2"> Classroom </option>
    //       <option value = "3"> Outside </option>
    //       <option value = "4"> Hallway </option>
    //     </Form.Select>
    //
    //
    //
    //     <Form.Label> Issue Selction: </Form.Label>
    //     <Form.Select aria-label = "Default select issue">
    //       <option> Issue </option>
    //       <option value = "1"> Paper Towels Missing </option>
    //       <option value = "2"> No Soap </option>
    //       <option value = "3"> No Tissues </option>
    //       <option value = "4"> Spill </option>
    //       <option value = "5"> Clogged </option>
    //       <option value = "6"> Not Clean </option>
    //       <option value = "7"> Network/Web Issue </option>
    //       <option value = "8"> Equipment Issue </option>
    //       <option value = "9"> Something is Broken </option>
    //       <option value = "10"> Temperature Issue </option>
    //       <option value = "11"> Trash </option>
    //       <option value = "12"> Water Fountain/Refill </option>
    //     </Form.Select>
    //
    //
    //
    //     <Form.Label> Room: </Form.Label>
    //       <Form.Select aria-label = "Default Room Number">
    //         <option> Room </option>
    //         <option select = "1"> 204 </option>
    //         <option select = "2"> 206 </option>
    //         <option select = "3"> 208 </option>
    //         <option select = "4"> 210 </option>
    //         <option select = "5"> 212 </option>
    //       </Form.Select>
    //
    //
    //
    //     <Form.Label htmlFor="inputComment">Comments</Form.Label>
    //     <Form.Control type = "text" id = "inputComment"/>
    //   </Form.Group>
    //   </Form>
    //
    //
    //     <Col sm = {{ span: 10, offset: 1 }}>
    //       <div class = "btn-block">
    //         <Button data-toggle = "button" aria-pressed="false" variant = "primary" type = "submit" size = "lg">
    //           Submit
    //         </Button>
    //       </div>
    //     </Col>
    //
    //
    // </Form>

  )
  }
}

export default Create;
