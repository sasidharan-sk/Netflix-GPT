import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const dispatch = useDispatch()

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const HandelClick = () => {
    const message = checkValidateData(email.current?.value, password.current?.value, name.current?.value);
    setErrorMessage(message);

    if (message) return;

    // Sign up or sign in logic
    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value, name.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
updateProfile(user ,{
  displayName: name.current?.value, photoURL:USER_AVATAR,
  
}).then(() => {
  const {
    uid: uid,
    displayName: displayName,
    email: email,
    photoURL : photoURL

  }=auth.currentUser

  dispatch(addUser({uid: uid,
    displayName: displayName,
    email: email,
    photoURL : photoURL
}))

  // ...
}).catch((error) => {
  // An error occurred
  // ...s
  setErrorMessage(errorMessage)
});
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;     
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute ">
        <img
         className="h-screen object-cover md:w-screen md:h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          srcset=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 p-4 md:p-10 bg-opacity-85 absolute text-white my-20 md:my-28 mx-auto right-0 left-0 bg-black rounded-lg"
      >
        <h1 className="py-4 my-2 text-2xl md:text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <div>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
            />
          </div>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button  className="bg-[#E50914] py-2 my-2 rounded-lg w-full hover:bg-red-800"onClick={HandelClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer text-1xl" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already a User? Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;