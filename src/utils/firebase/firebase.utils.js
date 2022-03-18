import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
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

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt : " select_account"

  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth)=>{

      const userDocRef = doc(db,'users', userAuth.uid);

      const userSnapshot = await getDoc(userDocRef);

      if(!userSnapshot.exists()){
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try{
              await setDoc(userDocRef, {
                  displayName,
                  email,
                  createdAt
              });
          }catch (error){
              console.log('error creating the user', error.message);
          }
      }
      return userDocRef;
  }

