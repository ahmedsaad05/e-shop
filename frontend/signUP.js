import { Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


import "./style.css";
import Login from "./signIN";




function Signup() {

    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState(0);

    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    localStorage.setItem("login", JSON.stringify(false));



    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("sanskarname", JSON.stringify(name));
            localStorage.setItem("sanskarname2", JSON.stringify(name2));
            localStorage.setItem("sanskarPhone", JSON.stringify(Phone));
            localStorage.setItem("sanskarEmail", JSON.stringify(email));
            localStorage.setItem("login", JSON.stringify(true));

            localStorage.setItem(
                "sanskarPassword",
                JSON.stringify(password)
            );
            console.log("Saved in Local Storage");
            alert("acount created")
            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return (
        <Fragment>

            {login ? (
                <div class="colm-form" id="ahaa"  >

                    <div class="form-container">
<h1 class="heading3" >sign<span>up</span></h1>
                        
                        <form onSubmit={handleFormSubmit} >
                            <input type="text" placeholder="first Name" required id="AEname" onChange={(event) => setName(event.target.value)} />
                            <input type="text" placeholder="last Name" required id="AEname" onChange={(event) => setName2(event.target.value)} />
                            <input type="email" placeholder="Email address" required id="AEemail" onChange={(event) => setEmail(event.target.value)} />
                            <input type="password" placeholder="Password" required id="AEpasword" onChange={(event) => setPassword(event.target.value)} />
                            <button type="submit"  class="btn-login" >Create new Account </button>
                        <p  style={{ color: "grey" }}>already have one?</p> <br/>

                            <Link to="/login" id="borderup"><button class="btn-new" onClick={()=>handleClick()} >login</button></Link>

                        </form>

                    </div>


                </div>
            ) : (
                <Login />
            )}

        </Fragment >);
}
export default Signup;