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