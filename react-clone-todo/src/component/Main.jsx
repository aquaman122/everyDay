import React from 'react';
import LeftSide from './LeftSide';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
`
const RightSide = styled.div`
  width: 600px;
  flex:7
`

function Main() {
  return(
    <>
      <MainContainer>
        <LeftSide style={{flex: 3}}/>
        <RightSide>
            dddd
        </RightSide>
      </MainContainer>
    </>
  );
}

export default Main;