import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
        getAuth, 
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth";
import { addDoc, 
        getFirestore } from "firebase/firestore";
import { useId } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyChI_OZOpo56wc2tLoKnNwn7FKCktKAQhs",
  authDomain: "netflix-clone-f4f43.firebaseapp.com",
  projectId: "netflix-clone-f4f43",
  storageBucket: "netflix-clone-f4f43.firebasestorage.app",
  messagingSenderId: "69698894194",
  appId: "1:69698894194:web:543d967f3b570b82c845eb"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



const signup = async  (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local", 
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(""));
    }
}

const logout = ()=> {
    signOut(auth);
}

export {auth, db, login, signup, logout};