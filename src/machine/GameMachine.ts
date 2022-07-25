import { createMachine } from "xstate";
import { createModel } from 'xstate/lib/model';
import { Player } from "../types";

// type dédié 
enum GameStates  {
    LOBBY = "lobby",
    PLAY = "play",
    VICTORY = "victory",
    DRAW = "draw",

}

export const GameModel = createModel(
    {
        player: [] as Player[], 
        currentPlayer: null as null | Player['id'],
        grid: [
            ["E", "E", "E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E", "E", "E"],
            ["E", "E", "E", "E", "E", "E", "E"],
        ]
    })

export const GameMachine = createMachine({
id: 'game',
initial: GameStates.LOBBY,
states: {
    [GameStates.LOBBY]: { 
        on: { 
            join: { 
                target: GameStates.LOBBY
            },
            leave: {
                target: GameStates.LOBBY
            },
            chooseColor: { 
                target: GameStates.LOBBY
            },
            start: { 
                target: GameStates.PLAY
            }
        }
},
    [GameStates.PLAY]: {
        on: {
        dropToken: {
            target: '??'
        }

    }
    },

    [GameStates.VICTORY]: {
        on: { 
            restart: { 
                target: GameStates.LOBBY
            }
        }
    }, 
    [GameStates.DRAW]: { 
        on: { 
            restart: { 
                target: GameStates.LOBBY
            }

        }

    }

}});