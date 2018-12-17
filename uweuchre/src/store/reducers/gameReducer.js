const initState = {
    games: []
}

const gameReducer = (state = initState, action) => {
    switch(action.type){
        case "CREATE_GAME":
            return{
                ...state,
                games: [...state.games, action.game]
            }
        default:
            return state;
    }
}

export default gameReducer;