import React, {useState} from "react"
import TextPole from "./components/TextPole";
import SimpleButton from "./components/SimpleButton";
import PageLine from "./components/PageLine";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LoginFunction = async () => {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            credentials: "include",
            body: new URLSearchParams({email, password})
        });

        if(response.ok) {
            navigate("/main");
        }
    }

    return(
            <div className="container-login">
                <h1 className="title-login">Autherization.</h1> 
                <div className="form-login">
                    <TextPole 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder={"email..."}
                        className={"pole-login"}
                    />

                    <TextPole 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder={"password..."}
                        className={"pole-login"}
                    />
                    
                    <SimpleButton 
                    text="okay" 
                    className="button-login"
                    onClick={LoginFunction}
                    />
                </div>
            </div>
    )
};

export default Login;               