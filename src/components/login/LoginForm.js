import React, { useState } from "react";
import "./LoginForm.css";
import Logo from "../../images/Fitflex-HD.png";


// Placeholder function for simulating a login request
const login = async (userName, password) => {
  // Placeholder implementation
};

// Placeholder function for simulating a signup request
const signup = async (userName, password) => {
  // Placeholder implementation
};

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message

    // Call login function (replace with actual backend call)
    // const response = await login(email, password);
    // Handle response accordingly
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message

    // Call signup function (replace with actual backend call)
    // const response = await signup(email, password);
    // Handle response accordingly
  };

  return (
    <div className="full-page">
      <div className="row">
        <div className="col blue-bg d-flex  "></div>
        <div className="col-sm form-side d-flex align-items-center justify-content-center ">
          <div className="form-wrapper">
            <div className="logo-container">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            <form>
              <div className="form-group">
                <label className="d-flex justify-content-end p-2">: <b>اسم المستخدم</b></label>
                <input
                  type="email"
                  name="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control mt-1"
                  placeholder="أدخل إسم المستخدم"
                />
              </div>
              <div className="form-group">
                <label className="d-flex justify-content-end p-2"><b>: كلمة المرور</b></label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control mt-1"
                  placeholder="أدخل كلمة المرور"
                />
              </div>
              {errorMessage && <div className="text-danger">{errorMessage}</div>}
              <div className="d-flex justify-content-evenly mt-3">
                <button type="submit" className="btn" id="SignInBtn" onClick={handleSignup}>
                  إنشاء حساب
                </button>
                <button type="submit" className="btn" id="LoginBtn" onClick={handleLogin}>
                  تسجيل دخول
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
