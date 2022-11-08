import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from "./header/Logo";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="socials">
          <FontAwesomeIcon className="icon" icon={faLinkedin} size="xl" />
          <FontAwesomeIcon className="icon" icon={faInstagram} size="xl" />
          <FontAwesomeIcon className="icon" icon={faTwitter} size="xl" />
        </div>
        <div className="copy">Copyright &copy; 2022</div>
        <Logo />
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  height: 100px;
  position: absolute;
  width: 100vw;
  background: #e6af2e;
  bottom: 0;
  .footer {
    display: flex;
    width: 90vw;
    height: 100%;
    justify-content: space-between;
    margin-inline: auto;
    align-items: center;
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
`;
export default Footer;
