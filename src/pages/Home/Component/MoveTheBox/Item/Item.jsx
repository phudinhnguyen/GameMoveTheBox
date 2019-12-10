import React, { useState, useEffect, useContext } from 'react';
import './Item.scss';
import { MoveTheBoxContext } from '../../../Context/Context';
const man = require('../../../../../assces/Image/man.jpg')
const Item = props => {

   const [dataLevel, nextMove, setNextMove] = useContext(MoveTheBoxContext);
   const [showType, setShowType] = useState('');

   useEffect(() => {
      switch (props.type) {
         case 'man':{
            setShowType('(^_^)')
            break;
         }  
         case 'box':{
            setShowType('|||||')
            break;
         } 
         case 'grass':{
            setShowType('')
            break;
         } 
         case 'rock':{
            setShowType('()()()()')
            break;
         }       
         default:
            break;
      }
   }, [props.type])

   return (
      <>
         <div className="item">
            {
               showType
            }
         </div>
      </>
   );
}

export default Item;