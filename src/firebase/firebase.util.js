import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDkq5Yy-s9FoXfSoJXwlEBkeI65GzXvKKM",
    authDomain: "e-store-3ca1d.firebaseapp.com",
    databaseURL: "https://e-store-3ca1d.firebaseio.com",
    projectId: "e-store-3ca1d",
    storageBucket: "e-store-3ca1d.appspot.com",
    messagingSenderId: "802827301197",
    appId: "1:802827301197:web:b52aa3ab6f20568f988704",
    measurementId: "G-B6NB4K99W9"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};
export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj=>{ 
        const newDocRef=collectionRef.doc()
        batch.set(newDocRef,obj)
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collecitons)=>{
    const transformedCollection = collecitons.docs.map(docSnapshot =>{
        const {title, items}= docSnapshot.data();
        
        return{
            routeName: encodeURI(title.toLowerCase()),
            id:docSnapshot.id,
            title,
            items
        }
    })
    
    return transformedCollection.reduce((acc,col)=>{
        acc[col.title.toLowerCase()]=col;
        return acc
    },{})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;