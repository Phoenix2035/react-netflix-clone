import NetflixLogin from "../images/netflix-login.png"

const LoginScreen = () => {
    return (
        <div className="login-screen">
            <div className="login-background">
                <img src={NetflixLogin} alt="Netflix Login" className="login-screen-logo" />

                <button className="login-sign-in" >
                    Sign In
                </button>

                <div className="login-gradient" />
            </div>
        </div>
    )
}

export default LoginScreen