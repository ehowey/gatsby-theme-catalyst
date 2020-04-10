/** @jsx jsx */
import { jsx } from "theme-ui"
import { AccordionNav } from "@theme-ui/sidenav"
import Links from "./links.mdx"

export default (props) => (
  <Links
    {...props}
    components={{
      wrapper: AccordionNav,
    }}
  />
)
