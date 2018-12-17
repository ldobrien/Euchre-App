const initState = {
    games: [
        {id: 1, winner1: "Lisa", winner2: "winner2", loser1: "l1", loser2: "l2", sscore: 0, Date: null}
    ]
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