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

const ListTodo = styled.div`
  display: flex;
`

const ListUl = styled.ul`
  font-size: 24px;
  margin-top: 30px;
`

const ListLi = styled.li`
  margin-top: 10px; 
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
          <ListTodo>
            <ListUl>
              <ListLi>213121</ListLi>
              <ListLi>13455413</ListLi>
              <ListLi>4351154</ListLi>
            </ListUl>
          </ListTodo>
        </Container>
      </Left>
    </>
  );
}

export default LeftSide;