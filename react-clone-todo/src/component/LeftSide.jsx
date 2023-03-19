import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";
import { CiMedicalCross } from "react-icons/ci";


const Left = styled.div`
  width: 250px;
  height: 100vh;
`;

const Id = styled.div`
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = styled.div`
  width: 77%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 7px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Search = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  border: none;
`;

const SearchBtn = styled.button`
  background-color: white;
  border: none;
  border-radius: 1px;
  border: 1px solid rgba(0,0 ,0 , 0.1);
`;

const LastYear = styled.div`
  display: flex;
`

function LeftSide({ id }) {
  return(
    <>
      <Left>
        <Id>아이디</Id>
        <Container>
          <SearchForm>
            <Search>
              <AiOutlineSearch />
              <SearchInput />
            </Search>
            <SearchBtn><CiMedicalCross /></SearchBtn>
          </SearchForm>


        </Container>
      </Left>
    </>
  );
}

export default LeftSide;