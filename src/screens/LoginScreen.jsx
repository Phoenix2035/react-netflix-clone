import {useState} from "react";

import SignUpScreen from "./SignUpScreen";
import NetflixLogin from "../images/netflix-login.png"

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)

    return (
        <div className="login-screen">
            <div className="login-background">
                <img src={NetflixLogin} alt="Netflix Login" className="login-screen-logo"/>

                <button className="login-sign-in" onClick={() => setSignIn(true)}>
                    Sign In
                </button>

                <div className="login-gradient"/>
            </div>

            <div className="login-body">
                {
                    signIn ? <SignUpScreen/> :<>
                        <h1>
                            Unlimited films, TV programmes and more.
                        </h1>
                        <h2>
                            Watch anywhere. Cancel at any time.
                        </h2>
                        <h3>
                            Ready to watch? Enter your email to create or restart your membership.
                        </h3>

                        <div className="login-input">
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <button onClick={() => setSignIn(true)}>
                                    Get Started
                                </button>
                            </form>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default LoginScreen
