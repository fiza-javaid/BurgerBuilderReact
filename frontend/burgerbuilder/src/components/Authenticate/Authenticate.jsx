import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login, loginFail } from "../../redux/authentication/authenticationSlice";
import axios from "axios";


export default function Authenticate() {
  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
  const dispatch = useDispatch()
  const [errorMessage, setErrorMessage] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800/signin", { email, password });
      setHasSubmitted(true);
      dispatch(login(res.data.user));
      return res.data;
    } catch (error) {
      setHasSubmitted(true);
      dispatch(loginFail(error));
      setErrorMessage(error.response.data.message);
    }

  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          height: "75vh",
        }}
      >
        <h1
          style={{
            fontSize: "2em",
            margin: "0.67em 0",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          {
            !isAuthenticated && !errorMessage && hasSubmitted ? <p style={{
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              color: "#721c24",
              borderRadius: "5px",
              padding: "15px",
              margin: "10px",
              boxSizing: "border-box",
            }}>There is no user record corresponding to this identifier. The user may have been deleted.</p> : null


          }

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            {errorMessage && (
              <p style={{ color: "red", fontSize: "0.9em" }}>{errorMessage}</p>
            )}
            <label
              style={{
                textAlign: "left",
                fontWeight: 700,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              placeholder="example@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                outline: "none",
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label
              style={{
                textAlign: "left",
                fontWeight: 700,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                outline: "none",
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#5c9210",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              SIGN IN
            </button>
            <Link to="/signup">
              <button
                type="button"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#944317",
                  cursor: "pointer",
                  fontWeight: "700",
                }}
              >
                SWITCH TO SIGN UP
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div >
  );
}