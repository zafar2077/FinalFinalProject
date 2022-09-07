import React from "react";
import { useNavigate } from "react-router-dom";
import "./reglogin.css";

export default function RegLogin() {
  const [option, setOption] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [image, setImage] = React.useState("");
  const navigate = useNavigate();
  let data;
  const handleSignIn = async (propEmail, propPassword) => {
    try {
      const response = await fetch("http://localhost:3003/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: propEmail,
          password: propPassword,
        }),
      });

      const data = await (await response).json();

      console.log(data);

      if (response.ok === true) {
        navigate("/");
        alert("successfully logged In");
      }
      if (response.ok === false) {
        alert("login unsuccessful");
      }
    } catch (e) {
      alert("login unsuccessful");
    }
  };

  const handleSignUp = async (
    propsName,
    propEmail,
    propPassword,
    propImage
  ) => {
    try {
      const formData = new FormData();

      formData.append("userImage", propImage);
      formData.append("fullName", propsName);
      formData.append("email", propEmail);
      formData.append("password", propPassword);
      const options = {
        method: "POST",
        body: formData,
        mode: "no-cors",
      };
      const response = await fetch(
        "http://localhost:3003/auth/signUp",
        options
      );

      let data = await response.text();

      console.log(data);
      if (response.ok === true) {
        alert("account successfully created");
      }
      if (response.status >= 400) {
        alert(response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="RegLoginContainer">
      <div className="buttonContainer">
        <button
          className="registerButton"
          onClick={() => {
            setOption("Register");
            setEmail("");
            setName("");
            setPassword("");
          }}
        >
          Register
        </button>

        <button
          className="loginButton"
          onClick={() => {
            setOption("Login");
            setEmail("");
            setName("");
            setPassword("");
          }}
        >
          Login
        </button>
      </div>

      {option === "Register" ? (
        <div className="formContainer">
          <p className="formHeader">{option}</p>
          <div className="formField">
            {" "}
            <p className="formLabel">Name</p>
            <input
              className="formInput"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className="formField">
            {" "}
            <p className="formLabel">Email</p>
            <input
              className="formInput"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="formField">
            {" "}
            <p className="formLabel">Password</p>
            <input
              className="formInput"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="formField" style={{ width: "100%" }}>
            {" "}
            <p className="formLabel">Profile Picture</p>
            <input
              className="imageInput"
              type="file"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            ></input>
          </div>
          <button
            className="submitButton"
            onClick={() => {
              handleSignUp(name, email, password, image);
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="formContainer">
          <p className="formHeader">{option}</p>
          <div className="formField">
            {" "}
            <p className="formLabel">Email</p>
            <input
              className="formInput"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="formField">
            {" "}
            <p className="formLabel">Password</p>
            <input
              className="formInput"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <button
            className="submitButton"
            onClick={() => {
              handleSignIn(email, password);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
