import Nav from "../components/Nav"

import Avatar from "../images/avatar.png"
import {useSelector} from "react-redux"


import {selectUser} from "../redux/models/user.reducer"
import {auth} from "../firebaseSetting"


const ProfileScreen = () => {
    const user = useSelector((selectUser))

    return (
        <div className="profile-screen">
            <Nav/>
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img src={Avatar} alt="avatar"/>

                    <div className="profile-details">
                        <h2>{user.email}</h2>
                        <div className="profile-plans">
                            <h3>Plans</h3>
                            <button className="profile-signOut" onClick={() => auth.signOut()}>
                                Sign Out
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;
