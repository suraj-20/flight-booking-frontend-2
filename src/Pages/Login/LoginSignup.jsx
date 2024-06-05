import React, { useState } from "react";
import "./LoginSignup.css";
import image from "../../Assets/signup-OCG-APNN.svg";
import { Link } from "react-router-dom";
import Alert from "../../Services/Alert";

const LoginSignup = ({ alert, setAlert }) => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const signup = async () => {
    // console.log("User signed in", formData);
    try {
      let responseData;
      console.log(process.env.REACT_APP_BASE_URL);
      await fetch(` http://localhost:8000/api/v1/user/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => (responseData = data))
        .catch((error) => console.log(error));

      if (responseData.message) {
        localStorage.setItem("token", responseData.token);
        setAlert({
          message: "Data submitted successfully " + responseData.message,
          type: "success",
          visible: true,
        });
        // alert(responseData.message);
        window.location.replace("/login");
      } else {
        setAlert({
          message: responseData.message,
          type: "error",
          visible: true,
        });
        // alert(responseData.message);
      }
    } catch (error) {
      setAlert({
        message: "Error submitting data: " + error.message,
        type: "error",
        visible: true,
      });
      console.error("Error in user signed in.", error);
    }
  };

  const login = async () => {
    // console.log("User logged in", formData);

    let responseData;
    // console.log(process.env.REACT_APP_BASE_URL);
    await fetch(`http://localhost:8000/api/v1/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
        console.log(data);
      })
      .catch((error) => console.error("Error in logged in", error));

    if (responseData.user) {
      localStorage.setItem("token", responseData.token);
      setAlert({
        message: "Data submitted successfully " + responseData.message,
        type: "success",
        visible: true,
      });
      window.location.replace("/");
    } else {
      setAlert({
        message: responseData.message,
        type: "error",
        visible: true,
      });
    }
  };

  if (!signup) return <div>Loading...</div>;
  if (!login) return <div>Loading...</div>;

  const closeAlert = () => {
    setAlert({ ...alert, visible: false });
  };

  return (
    <div className="login-container">
      <div className={`popup signup-popup show d-lg-flex`}>
        <div className="modal-content">
          <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 ">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="p-4">
            <div className="d-flex justify-content-between  align-items-center mb-4">
              <h4 className="d-flex fw-bold">
                {state === "signup" ? "Create Account" : "Sign in"}
              </h4>
              {state === "signup" ? (
                <button onClick={() => setState("login")} className="btn">
                  Already have an account?
                  <span className="text-primary"> Login</span>
                </button>
              ) : (
                <button onClick={() => setState("signup")} className="btn">
                  Create new Account?
                  <span className="text-primary"> Sign Up</span>
                </button>
              )}
            </div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                state === "Login" ? login() : signup();
                // : state === "signup"
                // ? signup()
                // : forgotPasswordForm();
              }}
              encType="multipart/form-data"
            >
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-column gap-2">
                      {state === "signup" ? (
                        <input
                          value={formData.first_name}
                          onChange={handleChange}
                          name="first_name"
                          type="text"
                          className="form-control custom-input"
                          placeholder="Name"
                          required
                        />
                      ) : (
                        <></>
                      )}
                      {state === "signup" ? (
                        <input
                          value={formData.last_name}
                          onChange={handleChange}
                          name="last_name"
                          type="text"
                          className="form-control custom-input"
                          placeholder="Last Name"
                          required
                        />
                      ) : (
                        <></>
                      )}
                      <input
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        type="text"
                        className="form-control custom-input"
                        placeholder="Email"
                      />
                      <input
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                        type="password"
                        className={`form-control custom-input ${
                          state === "forgotPassword"
                            ? "hidden"
                            : state === "resetPassword"
                            ? "show"
                            : ""
                        }`}
                        placeholder="Password"
                      />

                      {state === "signup" ? (
                        <input
                          value={formData.phone_number}
                          onChange={handleChange}
                          name="phone_number"
                          type="text"
                          className="form-control custom-input"
                          placeholder="Phone"
                          required
                        />
                      ) : (
                        <></>
                      )}

                      {state === "forgotPassword" ? (
                        <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4">
                          Forgot
                        </button>
                      ) : (
                        <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4">
                          {state === "signup" ? "Signup" : "Login"}
                        </button>
                      )}

                      <Link
                        onClick={() => setState("forgotPassword")}
                        className="btn d-lg-block text-center forgot"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div className="col d-none d-lg-flex">
                    <div className="d-flex  flex-column">
                      <img src={image} alt="" />
                      <p className="info-signup">
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {alert.visible && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={closeAlert}
          duration={5000}
        />
      )}
    </div>
  );
};

export default LoginSignup;
