import "../App.css"

const About = (props)=>{
        if(!props.fresh){
            props.setFresh(true)
            window.location.reload(false);
        }
return(
        <div className = "about_all">

            <h1 className = "logged">{props.name?'Hi ' + props.name:'you are not logged in'}</h1>
            <h1 className = "title">About Page</h1>
            <p className="desc"> Welcome to the Aurora University report a problem app.<br /> Here you can submit reports abouts
                issues on campus by filling out a form. You can also keep track of the progress on any of your previously reported
                problems.<br />
                <b>IF THIS IS AN EMERGENCY CALL 911 DO NOT USE THE APP!!!</b>
                <br />
                Below you can find the steps on how you report a problem.
                <ol className="list">
                    <li className="list1"> Click the Create Form button</li>
                    <li className="list2"> Fill out the form and if you want you can submit a picture to help explain the problem</li>
                    <li className="list3">Submit the form </li>
                    <li className="list4"> Now your done</li>
                </ol>
                Your problem has now be submitted you can view the progress on the issue in the view progress menu.
            </p>
        </div>
    )
}
export default About;
