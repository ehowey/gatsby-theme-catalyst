/** @jsx jsx */
import { jsx } from "theme-ui"

const siteFooter = props => {
    return (
        <footer
          sx={{
            display: "flex",
            color: "footer.text",
            backgroundColor: "footer.background",
            px: 3,
          }}
        >
          {props.children}
        </footer>
    )
}

export default siteFooter