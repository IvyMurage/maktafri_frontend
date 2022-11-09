import React from "react";
import styled from "styled-components";
import Search from "../SearchBookForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";


function Header() {
  return (
    <StyledHeader>
      <nav>
        <Logo />
        <Search />
        <div className="links">
          <ul>
            <li>
              <a href="/add_note">
                <FontAwesomeIcon icon={faPlus} size="xl" />
              </a>
            </li>
            <li>
              <a href="/favourites">
                <FontAwesomeIcon icon={faHeart} size="xl" />
              </a>
            </li>
            <li>
              <a href="/profile">
                <FontAwesomeIcon icon={faUser} size="xl" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  overflow-y: hidden;
  height: 15vh;
  display: flex;
  align-items: center;
  nav {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    h1,
    span {
      color: #000;
      font-size: 30px;
      font-weight: 700;
      text-align: center;
    }
    h1 span {
      color: #e6af2e;
      margin-right: 10px;
    }
    .links {
      ul {
        list-style: none;
        display: flex;

        li {
          margin: 0 20px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          background: #95290b;
          border-radius: 50%;
          a {
            color: #d9d9d9;
          }
        }
      }
    }
  }
  .logo {
    display: flex;
  }
  @media (max-width: 576px) {
    nav {
      width: 95%;
      h1,
      span {
        font-size: 24px;
      }
      .logo svg {
        height: 30px;
        width: 30px;
      }
      .links {
        display: none;
      }
    }
  }
`;
export default Header;
