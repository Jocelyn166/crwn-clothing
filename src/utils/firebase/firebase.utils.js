import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import{
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVxIPQWzEnNqzzEBugcucWJvOYObrvKXI",
    authDomain: "crwn-clothing-8f48c.firebaseapp.com",
    projectId: "crwn-clothing-8f48c",
    storageBucket: "crwn-clothing-8f48c.appspot.com",
    messagingSenderId: "983174575688",
    appId: "1:983174575688:web:faae85e93addbdf9ffca7d"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt : " select_account"

  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=>signInWithPopup(auth,googleProvider);
 

 
  export const createUserDocumentFromAuth = async(userAuth,additionalInformation = {})=>{
      if(!userAuth) return;
      const userDocRef = doc(db,'users', userAuth.uid);

      const userSnapshot = await getDoc(userDocRef);

      if(!userSnapshot.exists()){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try{
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt,
                  ...additionalInformation
              });
          }catch (error){
              console.log('error creating the user', error.message);
          }
      }
      return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth, email, password);
  };

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
      if(!email || !password) return;
      return await signInWithEmailAndPassword(auth, email, password);
  };

  export const signOutUser = () => signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

