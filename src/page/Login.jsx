import  {useState} from "react";
import LoginForm from "../component/LoginForm";

const Login = () => {


    const loginInfo = {
        email: "peter@gmail.com",
        password: "peter419"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        if(details.email === loginInfo.email && details.password === loginInfo.password){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            setError("Please input the correct details")
        }
    }

    return (
        <div>
            {(user.email !=="") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                </div>
            ): (
                <LoginForm Login={Login} error={error}/>
            )}
        </div>
    )
}

export default Login;


