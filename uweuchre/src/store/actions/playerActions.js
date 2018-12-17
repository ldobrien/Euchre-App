export const createPlayer = (player) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        // firestore.collection("players").add(player)
        firestore.collection("players").doc(player.Name).set(player)
        .then(() => {
            dispatch({type: 'CREATE_PLAYER', player})
        })
        .catch((err) => {
            dispatch({type: "CREATE_PLAYER_ERROR", err })
        })
    }
}