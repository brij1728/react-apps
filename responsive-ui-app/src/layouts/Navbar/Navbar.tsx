import {
  NavLinksLogo,
  NavLinksLogoImg,
  NavbarButton,
  NavbarContainer,
  NavbarInnerContainer,
  NavbarLink,
  NavbarLinksContainer,
  NavbarMenu,
  NavbarMenuContainer,
  NavbarMenuLinksContainer,
  NavbarMenuParagraph,
  NavbarMenuSign,
  NavbarSign,
} from "./NavbarElement";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import { logo } from "./../../assets";
import { useState } from "react";

const Menu = () => (
  <>
    <NavbarLink to={`#home`}>Home</NavbarLink>

    <NavbarLink to={`#wgpt3`}>GPT3</NavbarLink>

    <NavbarLink to={`#possibility`}>Open AI</NavbarLink>

    <NavbarLink to={`#features`}>Case Studies</NavbarLink>

    <NavbarLink to={`#blog`}>Library</NavbarLink>
  </>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <NavLinksLogo>
          <NavLinksLogoImg src={logo} alt="logo" />
        </NavLinksLogo>
        <NavbarLinksContainer>
          <Menu />
        </NavbarLinksContainer>
      </NavbarInnerContainer>
      <NavbarSign>
        <NavbarLink to={`#signIn`}> Sign In </NavbarLink>
        <NavbarButton>Sign Up</NavbarButton>
      </NavbarSign>
      <NavbarMenu>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <NavbarMenuContainer>
            <NavbarMenuLinksContainer>
              <Menu />
            </NavbarMenuLinksContainer>
            <NavbarMenuSign>
              <NavbarMenuParagraph> Sign In </NavbarMenuParagraph>
              <NavbarButton>Sign Up</NavbarButton>
            </NavbarMenuSign>
          </NavbarMenuContainer>
        )}
      </NavbarMenu>
    </NavbarContainer>
  );
};
