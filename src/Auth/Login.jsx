import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigation = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
  
      fetch(`http://localhost:3007/data/${username}`).then((res) => {
          return res.json();
        }).then((response) => {
        //   console.log(response); 
        if(Object.keys(response).length === 0){
            alert("Enter valid Username")

        }else{
            if(response.password ===password){
                alert('Success')
            navigation('/')
            }else{
                alert("Enter valid data")
            }
        }


        }).catch((error) => {
          alert("login failed due to :" + error.message);
        });
    
  };


  return (
    <div>
      <h1 style={{margin:'auto'}} className='w-50'>Login page</h1>
      <form
        className="form-group w-50 p-4 container"
        style={{ border: "2px solid #ccc" }}
        onSubmit={handleLogin}
      >
        <label>Username:</label>
        <input
          className="form-control"
          type="text"
          placeholder="please enter name"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="mt-2">Password:</label>
        <input
          className="form-control"
          type="password"
          placeholder="please enter password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary mt-4 me-4"
          
        >
          Login
        </button>

        <Link to={"/register"}>
      
          <button className="btn btn-outline-primary mt-4 ">
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
