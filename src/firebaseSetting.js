import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCryvgr3sSsVCv5mtHcnkbOXtDppSIt82U",
    authDomain: "netflix-clone-d6d07.firebaseapp.com",
    projectId: "netflix-clone-d6d07",
    storageBucket: "netflix-clone-d6d07.appspot.com",
    messagingSenderId: "15806699760",
    appId: "1:15806699760:web:624b276e18c610d8478a35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()


export {auth}

export default db
