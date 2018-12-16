export const createPlayer = (player) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({type: 'CREATE_PLAYER', player})
    }
}