import React, {useState, useEffect} from "react"
import { Routes, Route, useNavigate } from "react-router-dom";

const Main = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            const reposnse = await fetch("http://localhost:8080/account/me", {
                credentials: "include"
            });

            if(reposnse.ok) {
                setUser(await reposnse.json());
            } else {
                navigate("/login");
            }
        };

        loadUser();
    }, [navigate]);

    if (!user) return <p>Загрузка...</p>;

    return(
        <div>
            <h1>Hello {user.username} !</h1>
        </div>
    )
}

export default Main;