import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BookContext } from "./BookContext";

function Search() {
  const { onHandleSearchChange, search } = useContext(BookContext);
  return (
    <StyledForm action="/">
      <input type="search" placeholder="Search by title" value={search} onChange={onHandleSearchChange}></input>

      <FontAwesomeIcon icon={faSearch} />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  border: 2px solid #bbb8b2;
  border-radius: 10px;
  margin-top: -10px;
  padding: 12px;
  flex: 1;
  margin: 0 10%;
  input {
    border: 0;
    background-color: transparent;
    width: 98%;
    line-height: 1.5;
    align-content: center;

    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  @media (max-width: 576px) {
    padding: 8px 12px;
    margin: 0;
    margin-top: -10px;
    margin-left: 10%;
  }
`;

export default Search;
