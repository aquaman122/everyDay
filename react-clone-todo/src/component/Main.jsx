import React from 'react';
import LeftSide from './LeftSide';
import styled from 'styled-components';
import {BsThreeDotsVertical} from 'react-icons/bs';

const MainContainer = styled.div`
  display: flex;
`;
const RightSide = styled.div`
  width: 600px;
  flex:7
`;

const RightContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  background-color: #FEE19C;
`;

const RightHeader = styled.div`
  height: 80px;
`

const RightSpan = styled.span`
  font-size: 32px;
  font-weight: bold;
  color: orange;
`

const RightBoxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin: 0 50px 0 50px;
`

const RightBox = styled.div`
  width: 200px;
  height: 170px;
  background-color: orange;
  border-radius: 10%;
`

const BoxInsideHeader = styled.div`
  background-color: darkorange;
  display:flex;
  justify-content: flex-end;
  height: 40px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const HeaderDot = styled.div`
  display:flex;
  align-items: center;
  font-size: 20px;
  color: white;
`

const InsideSpan = styled.span`
  display:flex;
  margin: 10px; 0px 0px 10px;
  color:white;
  font-size: 18px;
`
const RightForm = styled.form`
  position: fixed;
  bottom: 20px;
  right: 50px;
`

const RightInput = styled.input`
  border: none;
  width: 100px;
  background-color: white;
`

function Main() {
  return(
    <>
      <MainContainer>
        <LeftSide style={{flex: 3}}/>
        <RightSide>
          <RightContainer>
            <RightHeader>
              <RightSpan>School</RightSpan>
            </RightHeader>
            <RightBoxes>
              <RightBox>
                <BoxInsideHeader>
                  <HeaderDot><BsThreeDotsVertical /></HeaderDot>
                </BoxInsideHeader>
                <InsideSpan>
                  
                </InsideSpan>
              </RightBox>
            </RightBoxes>
            <RightForm>
              <RightInput placeholder='할 일 입력'/>
            </RightForm>
          </RightContainer>
        </RightSide>
      </MainContainer>
    </>
  );
}

export default Main;