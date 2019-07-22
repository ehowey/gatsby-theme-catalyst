
/** @jsx jsx */
import { jsx } from 'theme-ui'

const siteContainer = props => {
    return (
        <div
          sx={{
            width: "100%",
            ml: "auto",
            mr: "auto",
          }}
        >
          {props.children}
        </div>
    )
}

export default siteContainer