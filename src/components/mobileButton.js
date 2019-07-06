/** @jsx jsx */
import { jsx } from 'theme-ui'

const siteMobileButton = (props) => {
	return (
		<button onClick={props.action} {...props} sx={{
			gridColumn: '2 / 3',
			gridRow: '1 / 2',
			alignSelf: 'center',
			color: '#4a4a4a',
			cursor: 'pointer',
			display: ['block', 'none', null],
			height: '2rem',
			position: 'relative',
			width: '2rem',
			marginLeft: 'auto',
			backgroundColor: 'transparent',
			border: 'none',
		}}>
            <span sx={{
				backgroundColor: 'currentColor',
				display: 'block',
				height: '1px',
				top: 'calc(50% - 6px)',
				left: 'calc(50% - 8px)',
				position: 'absolute',
				transformOrigin: 'center',
				transitionDuration: '86ms',
				transitionProperty: 'background-color, opacity, transform',
				transitionTimingFunction: 'ease-out',
				width: '16px',
				transform: props.open && 'translateY(5px) rotate(45deg)'
			}}></span>
            <span sx={{
				backgroundColor: 'currentColor',
				display: 'block',
				height: '1px',
				top: 'calc(50% - 1px)',
				left: 'calc(50% - 8px)',
				position: 'absolute',
				transformOrigin: 'center',
				transitionDuration: '86ms',
				transitionProperty: 'background-color, opacity, transform',
				transitionTimingFunction: 'ease-out',
				width: '16px',
				opacity: props.open && '0',
			}}></span>
            <span sx={{
				backgroundColor: 'currentColor',
				display: 'block',
				height: '1px',
				top: 'calc(50% + 4px)',
				left: 'calc(50% - 8px)',
				position: 'absolute',
				transformOrigin: 'center',
				transitionDuration: '86ms',
				transitionProperty: 'background-color, opacity, transform',
				transitionTimingFunction: 'ease-out',
				width: '16px',
				transform: props.open && 'translateY(-5px) rotate(-45deg)'
			}}></span>
        </button>
	)
}

export default siteMobileButton;