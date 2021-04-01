/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

const WorkLi = ({ title, publisher, date, link }) => {
  return (
    <li sx={{ mb: 3, ":last-of-type": { mb: 0 } }} key={title}>
      <Themed.a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </Themed.a>
      &nbsp;&#8212;&nbsp; <i>{publisher}</i>, {date}
    </li>
  )
}

export default WorkLi
