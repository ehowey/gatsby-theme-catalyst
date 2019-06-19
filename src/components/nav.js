import React from 'react';
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";

//Nav Styles - Start
const Nav = styled.nav`
grid-column: 1 / -1;
grid-row: 2 / 3;
justify-self: end;
align-self: center;

@media (min-width: ${props => props.theme.screen.tablet}) {
grid-column: 2 / 3;
grid-row: 1 / 2;
}
`;

const NavList = styled.ul`
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
`;

const NavListItem = styled.li`
margin: 0 0.75em;
`;

const NavLink = styled(Link)`
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

const siteNav = () => {

    return (
        <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              menuLinks {
                name
                link
              }
            }
          }
        }
        `}
        render={data => (
            <Nav>
                <NavList mobileMenuOpen={mobileMenuOpen}>
                    {data.site.siteMetadata.menuLinks.map(link => (
                    <NavListItem key={link.name}>
                    <NavLink to={link.link}>
                        {link.name}
                    </NavLink>
                    </NavListItem>
                    ))}
                </NavList>
            </Nav>
        )}/>
    )
}

export default siteNav