import React, { useState, useEffect } from 'react';
import { level1 } from '../../../Data/Data';

export const MoveTheBoxContext = React.createContext(null);

const MoveTheBoxWrap = props => {

    const [dataLevel, setdataLevel] = useState(level1);
    const [nextMove, setNextMove] = useState({ x: 0, y: 0 });
    const [prevMove, setPrevMove] = useState({ x: 0, y: 0 })
    console.log(nextMove)

    const findMan = () => {
        for (let y = 0; y < dataLevel.length; y++) {
            for (let x = 0; x < dataLevel[y].length; x++) {
                if (dataLevel[y][x].type === 'man') {
                    setNextMove({ x: x, y: y });
                    setPrevMove({ x: x, y: y });
                }
            }
        }
    }

    useEffect(() => {
        findMan();
    }, [])

    useEffect(() => {
        if (nextMove.x !== prevMove.x || nextMove.y !== prevMove.y) {
            const data = [...dataLevel];    
            let nextNextMoveX = nextMove.x - prevMove.x + nextMove.x;
            let nextNextMoveY = nextMove.y - prevMove.y + nextMove.y;
            switch (data[nextMove.y][nextMove.x].type) {
                case 'grass': {
                    data[nextMove.y][nextMove.x].type = 'man';
                    data[prevMove.y][prevMove.x].type = 'grass';
                    setPrevMove(nextMove)
                    setdataLevel(data);
                    break;
                }
                case 'box': {
                    if (data[nextNextMoveY][nextNextMoveX].type === 'grass') {
                        data[nextMove.y][nextMove.x].type = 'man';
                        data[prevMove.y][prevMove.x].type = 'grass';
                        data[nextNextMoveY][nextNextMoveX].type = 'box';
                        setPrevMove(nextMove)
                        setdataLevel(data);
                    } else {
                        setNextMove(prevMove)
                    }
                    break;
                }
                case 'rock': {
                    setNextMove(prevMove)
                    break;
                }

                default:
                    break;
            }
        }
    }, [nextMove])

    return (
        <MoveTheBoxContext.Provider value={[dataLevel, nextMove, setNextMove]}>
            {props.children}
        </MoveTheBoxContext.Provider>
    )
}

export default MoveTheBoxWrap;
