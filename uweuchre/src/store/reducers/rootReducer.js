import playerReducer from "./playerReducer";
import gameReducer from "./gameReducer";
import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    player: playerReducer,
    game: gameReducer,
    auth: authReducer
})

export default rootReducer;