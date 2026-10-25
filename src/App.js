import React, {useState} from "react"
import TextPole from "./components/TextPole";
import NumberPole from "./components/NumberPole";
import SimpleButton from "./components/SimpleButton";
import PageLine from "./components/PageLine";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles.css";
import Login from "./login";
import Main from "./main";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUserFunction = async () => {

    const response = await fetch("http://localhost:8080/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    });

    if (response.ok) {
      navigate("/Login");
    }

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Routes>
      <Route path="/" element={<div className="container">
        <div className="header">
          <p>My CRUD Application</p>
        </div>

        <div className="block-create">
          <div className="title"><p>1. Create.</p></div>

          <div className="form">
            <TextPole
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={"name.."}
              className="form-element" />

            <TextPole
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"email.."}
              className="form-element" />

            <TextPole
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"password.."}
              className="form-element" />

            <SimpleButton
              text="okay"
              className="form-element"
              onClick={createUserFunction} />

          </div>
        </div>
      </div>} />

      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App

   