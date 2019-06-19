import React, { Component } from 'react';
import styled from "styled-components";

const HeaderComponent = styled.header`
	display: grid;
	grid-template-columns: auto 1fr;
	z-index: 1000;
	width: 100%;
	padding: 1rem 0;
	background-color: ${props => props.theme.color.primary};
`
class siteHeader extends Component {

	render() {
	return (
		<HeaderComponent mobileMenuOpen={mobileMenuOpen}>
			{this.props.children}
		</HeaderComponent>
	)
	}
}

export default siteHeader;
