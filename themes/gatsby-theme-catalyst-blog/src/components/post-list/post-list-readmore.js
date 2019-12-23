/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { Button } from "@theme-ui/components"

const Readmore = props => {
  return (
    <Button as={Link} to={props.link}>
      {props.children}
    </Button>
  )
}

export default Readmore
