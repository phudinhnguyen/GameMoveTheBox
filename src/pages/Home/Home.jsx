import React, { Component } from 'react';
import MoveTheBoxWrap, { MoveTheBoxContext } from './Context/Context';
import MoveTheBox from './Component/MoveTheBox/MoveTheBox';

const Home = props => {
        return (
            <MoveTheBoxWrap>
                <MoveTheBox />
            </MoveTheBoxWrap>
        )
}

export default Home;
