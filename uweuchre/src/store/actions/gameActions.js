export const createGame = (game) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();

        firestore.collection("games").add(game)
        .then(() => {
            dispatch({type: 'CREATE_GAME', game})
        })
        .catch((err) => {
            dispatch({type: "CREATE_GAME_ERROR", err})
        })
    }
}