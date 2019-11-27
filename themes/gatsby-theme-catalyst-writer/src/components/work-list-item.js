/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const WorkLi = props => {
  return (
    <li sx={{ mb: 3, ":last-of-type": { mb: 0 } }} key={props.title}>
      <Styled.a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </Styled.a>
      &nbsp;&#8212;&nbsp; {props.publisher}, {props.date}
    </li>
  )
}

export default WorkLi
