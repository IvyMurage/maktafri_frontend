import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./header/Logo";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="footer">
        <div className="socials">
          <FontAwesomeIcon className="icon" icon={faLinkedin} size="xl" />
          <FontAwesomeIcon className="icon" icon={faInstagram} size="xl" />
          <FontAwesomeIcon className="icon" icon={faTwitter} size="xl" />
        </div>
        <div className="copy"> Copyright &copy; 2022 </div> <Logo />
      </div>
      <div className="copym">Copyright &copy; {date}</div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: 60px;
  width: 100%;
  background: #e6af2e;
  bottom: 0;
  .footer {
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-between;
    margin-inline: auto;
    align-items: center;
  }
  .copym {
    display: none;
  }
  .copy {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }
  .socials {
    display: flex;
    gap: 30px;
    .icons {
    }
  }
  .logo {
    display: flex;
    h1,
    span {
      color: #000;
      font-size: 30px;
      font-weight: 700;
    }
    h1 span {
      color: #95290b;
      margin-right: 10px;
    }
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    height: 100px;
    .footer {
      width: 95%;
    }
    .socials {
      gap: 20px;
      color: #000;
    }
    .copy {
      display: none;
    }
    .copym {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      display: block;
      align-self: center;
      margin-bottom: 10px;
    }
  }
`;
export default Footer;
