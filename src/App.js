import {useEffect} from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import ProfileScreen from "./screens/ProfileScreen";
import {auth} from "./firebaseSetting"
import {login, logout, selectUser} from "./redux/models/user.reducer";


function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email
                }))
            } else {
                dispatch(logout())
            }
        })

        return () => unsubscribe()
    }, [dispatch])

    return (
        <div className="container">
            {
                !user
                    ? <LoginScreen/>
                    :
                        <Routes>
                            <Route path="/" element={<HomeScreen/>}/>
                            <Route path="/profile" element={<ProfileScreen/>}/>
                        </Routes>
            }

        </div>
    );
}

export default App;
