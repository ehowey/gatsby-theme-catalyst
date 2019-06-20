import React from 'react';
import styled from 'styled-components';

//Mobile Button Styles - Start - Hamburger Button, based on styles from Bulma.io
const MobileButton = styled.button`
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

const siteMobileButton = (props) => {
	return (
		<MobileButton onClick={props.action} mobileMenuOpen={props.open}>
            <span></span>
            <span></span>
            <span></span>
        </MobileButton>
	)
}

export default siteMobileButton;