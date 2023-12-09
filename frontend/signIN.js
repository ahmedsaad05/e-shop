import { Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";


function Login() {

    // const [emaillog, setEmaillog] = useState(" ");
    // const [passwordlog, setPasswordlog] = useState(" ");
    // const [flag, setFlag] = useState(false);
    // const [home, setHome] = useState(true);
    // var Ahmed = localStorage.getItem("sanskarname").replace(/"/g, "");
    // const alert = useAlert()

    // function handleLogin(e) {
    //     e.preventDefault();
    //     var pass = localStorage
    //         .getItem("sanskarPassword")
    //         .replace(/"/g, "");
    //     var mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    //     if (!emaillog || !passwordlog) {
    //         setFlag(true);
    //         console.log("EMPTY");
    //     } else if (passwordlog !== pass || emaillog !== mail) {
    //         setFlag(true);
    //     }
    //     else {
    //         setHome(!home);
    //         alert(`Wellcome ${Ahmed}`);
    //         setFlag(false);
    //     }
    // }
    return (

        <Fragment>



            <div class="colm-form">

                <div class="form-container">
                    <h1 class="heading2" >sign<span>in</span></h1>

                    <form >
                        <input type="email"  placeholder="Email address" required
                        //  onChange={(event) => setEmaillog(event.target.value)}
                        />
                        <input type="password"  placeholder="Password"
                        //  onChange={(event) => setPasswordlog(event.target.value)}
                        />
                        <button type="submit" class="btn-login">Login</button>
                        <p style={{ color: "grey" }}>Dont have one?</p>
                        <br />
                        <Link to="/signup" id="borderup"><button class="btn-new">Create new Account</button></Link>
                    </form>
                </div>
            </div>



        </Fragment >);
}
export default Login;