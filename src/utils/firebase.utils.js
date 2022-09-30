// Import the functions you need from the SDKs you need
import { initializeApp, setLogLevel } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'

import { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want too use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvIILTcsaXn3af5HNYsAZ3EYoJRnc4oTM",
    authDomain: "messenger-app-cddf1.firebaseapp.com",
    projectId: "messenger-app-cddf1",
    storageBucket: "messenger-app-cddf1.appspot.com",
    messagingSenderId: "536902506499",
    appId: "1:536902506499:web:d78a3f47c53477beb9d636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();


export const getMessages = async () => {
    const [messages, setMessages] = useState({});

    useEffect(() => {
        const getDocs = async () => {
            const messagesRef = collection(db, "messages");
            const messageSnap = await getDoc(messagesRef);
            setMessages(messageSnap.data())
        }
        getDocs();
    }, []);

    return messages
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;
}

export const signOutUser = async () => {
    await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}
