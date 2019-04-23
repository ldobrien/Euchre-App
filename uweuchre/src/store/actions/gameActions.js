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

export const editGame = (id, game) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection("games").doc(id).update({
            winner1: game.winner1,
            winner2: game.winner2,
            loser1: game.loser1,
            loser2: game.loser2,
            score: game.score
        })
        .then(() => {
            dispatch({type: 'UPDATE_GAME', game})
        })
        .catch((err) => {
            dispatch({type: "UPDATE_GAME_ERROR", err})
        })
    }
}