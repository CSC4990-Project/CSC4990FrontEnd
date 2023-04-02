import "../App.css"

const About = (props)=>{
        if(!props.fresh){
            props.setFresh(true)
            window.location.reload(false);
        }
        return (
                <div>

                    <h1>{props.name ? 'Hi ' + props.name : 'you are not logged in'}</h1>
                    <h1>About Page</h1>
                    <p> Welcome to the Aurora university report a problem app. Here you can submit reports abouts
                        issues on campus by filling out a form. You can also keep track of the progress on any of your
                        previously reported
                        problems.
                        IF THIS IS AN EMERGENCY CALL 911 DO NOT USE THE APP!!!
                        Below you can find the steps on how you report a problem.
                        <ol>
                            <li> Click the Report a problem button</li>
                            <li> Fill out the form and if you want you can submit a picture to help explain the
                                problem
                            </li>
                            <li>Submit the form</li>
                            <li> Now your done</li>
                        </ol>
                        Your problem has now be submitted you can view the progress on the issue in the view progress
                        menu.
                    </p>
                </div>
            )
}
export default About;