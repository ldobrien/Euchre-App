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

export const addPlayerWeight = (playerName, weight) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection("players").doc(playerName).update({
            weight: weight
        })
        .then(() => {
            dispatch({type: 'ADD_WEIGHT', weight})
        })
        .catch((err) => {
            dispatch({type: "ADD_WEIGHT_ERROR", err })
        })
    }
}