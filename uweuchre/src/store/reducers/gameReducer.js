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
        case "UPDATE_GAME":
            return{
                ...state,
                games: state.games.map((game, id) => {
                    if (id === action.id) {
                      return Object.assign({}, game, {
                        completed: false
                      })
                    }
                    return state.games
                })
            }
        case "DELETE_GAME":
            return{
                ...state,
                games: []
            }
        default:
            return state;
    }
}

export default gameReducer;