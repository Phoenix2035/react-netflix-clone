import { Route, Routes } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";


function App() {
    const user = false
    return (
        <div className="container">
            <Routes>
                {!user
                    ?
                    <Route path="/login" element={<LoginScreen />} />
                    :
                    <Route path="/" element={<HomeScreen />} />
                }
            </Routes>
        </div>
    );
}

export default App;
