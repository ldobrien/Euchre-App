const initState = {
    players: []
}

const playerReducer = (state = initState, action) => {
    switch(action.type){
        case "CREATE_PLAYER":
            return {
                ...state,
                players: [...state.players, action.player]
            }
        case "ADD_WEIGHT":
            return {
                ...state,
                players: [...state.players, action.playerName, action.weight]
            }
        default:
            return state;
    }
}
export default playerReducer;