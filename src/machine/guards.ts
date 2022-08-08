// ici mettre les fonctions qui permettent d'empecher une transition

import { GameContext, GameEvent, GameEvents, GameGuard, PlayerColor } from "../types";

export const canJoinGuard: GameGuard<"join"> = (context, event) => {
    
 return context.players.length < 2 && context.players.find(p => p.id === event.playerId) === undefined; 
}

export const canLeaveGuard: GameGuard<"join"> = (context, event) => {
    return !!context.players.find(p => p.id === event.playerId);
}

export const canChooseColorGuard: GameGuard<"chooseColor"> = (context, event) => {
    return [PlayerColor.RED, PlayerColor.YELLOW].includes(event.color) && context.players.find(p => p.id === event.playerId)!== undefined && context.players.find(p => p.color === event.color) === undefined;
}

export const canStartGameGuard: GameGuard<"start"> = (context, event) => {
    return context.players.filter(p => p.color).length===2;
}

export const canDropGuard: GameGuard<"dropToken"> = (context, event) => { 
    return event.x <= context.grid[0].length &&
    event.x >= 0 && 
    // regarder si c'est au tour du joueur de déposer 
    context.currentPlayer === event.playerId &&
    

}