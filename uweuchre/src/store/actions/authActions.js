export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.username,
            credentials.password
        ).then(() => {
            dispatch({ type: "LOGIN_SUCCESS"});
        }).catch((err) => {
            dispatch({ type: "LOGIN_ERROR", err});
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({type: "SIGNOUT_SUCCESS"})
        });
    }
}

export const addAccount = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        console.log(newUser)
        firebase.auth().createUserWithEmailAndPassword(
            newUser.username,
            newUser.password
        )
        .then(()=> {
            dispatch({ type: "SIGNUP_SUCCESS"})
        })
        .catch((err) => {
            dispatch({ type: "SIGNUP_ERROR", err})
        })
    }
}