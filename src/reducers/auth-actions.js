import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}
export const signInAction = (values) => {
    const { email, password } = values;
    return () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
            alert('You are succssfully signed In by: ' + response.email);
        }, (error) => {
            alert(error.message);
        })
    }
}
export const signUpAction = (values) => {
    const { email, password } = values;
    return () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
            alert('You are succssfully signed Up by: ' + response.email);
        }, (error) => {
            alert(error.message);
        })
    }
}