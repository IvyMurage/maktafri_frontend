import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <StyledForm action="/">
      <input type="search" placeholder="Search by title"></input>
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #bbb8b2;
  border-radius: 10px;
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
`;

export default Search;