import styled from 'styled-components';
import { Link } from "gatsby";
import Img from "gatsby-image"

//Header Styles - Start - Sets dynamic grid to control layout for header area
export const Header = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    z-index: 1000;
    width: 100%;
    padding: 1rem 0;
    background-color: ${props => props.theme.color.primary};
`
//Header Styles - End

//Branding Styles - Start - Controls look of Logo and Site Title
export const Branding = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
`

export const Logo = styled(Img)`
    margin-right: 0.5rem;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 1.75rem;
`

export const TitleLink = styled(Link)`
    color: #000000;
    text-decoration: none;
`
//Branding Styles - End

//Mobile Button Styles - Start - Hamburger Button, based on styles from Bulma.io
export const MobileButton = styled.button`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    color: #4a4a4a;
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
    background-color: transparent;
    border: none;

    @media (min-width: ${props => props.theme.screen.tablet}) {
      display: none;
    }

    span {
        background-color: currentColor;
        display: block;
        height: 1px;
        left: calc(50% - 8px);
        position: absolute;
        -webkit-transform-origin: center;
                transform-origin: center;
        transition-duration: 86ms;
        transition-property: background-color, opacity, -webkit-transform;
        transition-property: background-color, opacity, transform;
        transition-property: background-color, opacity, transform, -webkit-transform;
        transition-timing-function: ease-out;
        width: 16px;
    }
    
    span:nth-child(1) {
        top: calc(50% - 6px);
    }

    span:nth-child(2) {
        top: calc(50% - 1px);
    }

    span:nth-child(3) {
        top: calc(50% + 4px);
    }

    ${({ mobileMenuOpen }) =>
      mobileMenuOpen &&
      `
      span:nth-child(1) {
          -webkit-transform: translateY(5px) rotate(45deg);
          transform: translateY(5px) rotate(45deg);
      }

      span:nth-child(2) {
      opacity: 0;
      }

      span:nth-child(3) {
          -webkit-transform: translateY(-5px) rotate(-45deg);
          transform: translateY(-5px) rotate(-45deg);
      }
      `}

`;

//Mobile Button Styles - End

//Nav Styles - Start
export const Nav = styled.nav`
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  justify-self: end;
  align-self: center;

  @media (min-width: ${props => props.theme.screen.tablet}) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    }
`;

export const NavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: none;

    @media (min-width: ${props => props.theme.screen.tablet}) {
    display: flex;
    flex-direction: row;
    }

    ${({ mobileMenuOpen }) =>
      mobileMenuOpen &&
      `
        margin-right: 1rem;
        display: flex;
        flex-direction: column;

        > ${NavListItem} {
          margin: 0;
          margin-top: 1rem;
        }
      `};
  }
`;

export const NavListItem = styled.li`
  margin: 0 0.75em;
`;

export const NavLink = styled(Link)`
    color: ${props => props.theme.color.textBlack};
    padding: 1rem 0.5rem;
    text-decoration: none;

    @media (min-width: ${props => props.theme.screen.tablet}) {
    font-size: 90%;
    }

    @media (min-width: ${props => props.theme.screen.laptop}) {
    font-size: 100%;
    }
`
//Nav Styles - End
