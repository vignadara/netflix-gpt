import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/c869f424-8171-48ff-9b26-eb983c3cdf40/US-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="bg-img"
                />
            </div>
            <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="py-4 font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm &&
                    <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
                }
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
                <button className="p-4 my-8 bg-red-600 w-full rounded-lg"> {isSignInForm ? "Sign In" : "Sign Up"} </button>
                <p className="p-4 cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a Member? Sign In"}</p>
            </form>
        </div>

    );
};

export default Login;