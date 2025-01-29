
import { initializeApp } from "firebase/app";
import{
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword} from "firebase/auth";
import{
    addDoc,
    collection,
    getFirestore} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyB11W4zYWc8HvOatOKiYUTzuja8V0Hnqo8",
  authDomain: "netflix-clone-d6bc3.firebaseapp.com",
  projectId: "netflix-clone-d6bc3",
  storageBucket: "netflix-clone-d6bc3.firebasestorage.app",
  messagingSenderId: "801709560408",
  appId: "1:801709560408:web:e6669a3312f957b84bb02d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
        try{
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;
            await addDoc(collection(db, "user"),{
                uid: user.uid,
                name,
                authProvider: "local",
                email,
            });

        }
        catch(error){
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "));
        }
}

const login = async (email, password)=>{
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "));
            
        }
        
       
}
const logout = ()=>{
    signOut(auth);
}
export {auth, db, login, signup, logout};