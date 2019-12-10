import React, { useState, useEffect, useContext } from 'react'
import Item from './Item/Item';
import './MoveTheBox.scss';
import { MoveTheBoxContext } from '../../Context/Context';

const MoveTheBox = props => {

   const [dataLevel, nextMove, setNextMove] = useContext(MoveTheBoxContext);
   const [dataToShow, setDataToShow] = useState([])

   useEffect(() => {
      let createLevel = [];
      for (let y = 0; y < dataLevel.length; y++) {
         for (let x = 0; x < dataLevel[y].length; x++) {
            createLevel.push({
               key: y.toString() + x.toString(),
               coordinate: { y: y, x: x },
               type: dataLevel[y][x].type,
            })
         }
      }
      setDataToShow(createLevel);
   }, [dataLevel])

   const handleKeydown = (e) => {
      switch (e.key) {
         case 'ArrowUp': {
            setNextMove({
               x: nextMove.x,
               y: nextMove.y - 1,
            })
            break;
         }
         case 'ArrowRight': {
            setNextMove({
               x: nextMove.x + 1,
               y: nextMove.y,
            })
            break;

         }
         case 'ArrowDown': {
            setNextMove({
               x: nextMove.x,
               y: nextMove.y + 1,
            })
            break;

         }
         case 'ArrowLeft': {
            setNextMove({
               x: nextMove.x - 1,
               y: nextMove.y,
            })
            break;

         }
         default:
            break;
      }

   }

   return (
      <div className={'moveTheBox'} onKeyDown={handleKeydown} tabIndex="0">
         {
            dataToShow.map(item => {
               return <Item key={item.key} coordinate={item.coordinate} type={item.type} />
            })
         }
      </div>
   )
}

export default MoveTheBox;
