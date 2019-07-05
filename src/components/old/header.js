import React, { Component } from 'react';
import styled from "styled-components";
import Branding from './branding';
import Nav from './nav';
import MobileButton from './mobileButton'


class siteHeader extends Component {
	constructor(props) {
        super(props)

        // Bind the this context to the handler function
		this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
		this.closeMobileMenu = this.closeMobileMenu.bind(this);

        // Set some state
        this.state = {
            mobileMenuOpen: false
        };
    }

  toggleMobileMenu = () => {
	this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
	if (this.state.mobileMenuOpen) {
	  this.setState({ mobileMenuOpen: false });
	}
  };

  render() {

	//Header Styles - Start - Sets dynamic grid to control layout for header area
	const Header = styled.header`
	display: grid;
	grid-template-columns: auto 1fr;
	z-index: 1000;
	position: ${props => props.theme.options.headerPosition};
	width: 100%;
	padding: 0.5rem 0;
	background-color: ${props => props.theme.color.primary};
	top: 0;

		${({ mobileMenuOpen }) =>
		mobileMenuOpen &&
		`
		background-color: grey;
		`};
	`;
	//Header Styles - End

	return (
	  <Header mobileMenuOpen={this.state.mobileMenuOpen}>
		<Branding open={this.state.mobileMenuOpen}/>
		<MobileButton action={this.toggleMobileMenu} open={this.state.mobileMenuOpen}/>
		<Nav action={this.closeMobileMenu} open={this.state.mobileMenuOpen}/>
	</Header>
	);
  }
}

export default siteHeader;
