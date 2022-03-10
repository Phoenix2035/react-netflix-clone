const SignUpScreen = () => {

    const register = e => {
        e.preventDefault()
    }

    const signIn = e => {
        e.preventDefault()
    }
    return (
        <div className="signup-screen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit" onClick={signIn}>
                    Sign In
                </button>
                <h4>
                    <span>New to Netflix? </span>
                    <span onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignUpScreen;
