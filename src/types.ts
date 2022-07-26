import { ContextFrom, EventFrom } from "xstate";
import { GameModel } from "./machine/GameMachine";

export enum PlayerColor {
    RED = "red",
    YELLOW = "yellow",
}


export type Player = {
   id: string,
   name: string,
//    le ? veut dire que c'est optionnel 
   color?: PlayerColor, 
}

export type CellEmpty = "E";
export type CellState = PlayerColor.RED |PlayerColor.YELLOW | CellEmpty;
export type GridState = CellState[][];
// gamecontext est un objet qui correspond au contexte du modèle
export type GameContext = ContextFrom<typeof GameModel>;
export type GameEvents = EventFrom<typeof GameModel>;
export type GameEvent<T extends GameEvents['type']> = GameEvents & {type: T};
export type GameGuard<T extends GameEvents['type']> = (context: GameContext, event: GameEvent<T>) => boolean;
export type GameAction<T extends GameEvents['type']> = (context: GameContext, event: GameEvent<T>) => Partial<GameContext>;