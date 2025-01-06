import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";

const Login = () => {
  const [isSigninForm, setSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate data
    const errText = validateForm(email.current.value, password.current.value);
    setErrorMessage(errText);
    console.log(errText);
  };
  const toggleSigninForm = () => {
    setSigninForm(!isSigninForm);
  };

  return (
    <>
      <Header />
      <div className="absolute top-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"
          alt="bg"
        />
      </div>
      <div className="absolute h-screen bg-black/30 top-0 w-[100%]"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 relative bg-black/85  rounded-md p-6 m-auto mt-36"
      >
        <h1 className="text-white text-2xl my-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            ref={fullname}
            type="text"
            placeholder="Name"
            className="p-2 my-4 rounded-[4px] border border-white w-[100%] bg-transparent text-sm text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-4 rounded-[4px] border border-white w-[100%] bg-transparent text-sm text-white"
        />
        <input
          onFocus={setErrorMessage(" ")}
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 rounded-[4px] my-4 border border-white w-[100%] bg-transparent text-sm text-white"
        />
        <p className="text-red-400 text-sm py-3">{errorMessage}</p>
        <button
          className="rounded-[4px] bg-red-600 px-4 py-2 my-4  text-white block w-[100%]"
          onClick={handleButtonClick}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-center text-white text-sm">Forgot password?</p>
        <p
          className="text-center text-white text-sm py-3 cursor-pointer"
          onClick={toggleSigninForm}
        >
          New to Netflix? Signup
        </p>
      </form>
    </>
  );
};

export default Login;
