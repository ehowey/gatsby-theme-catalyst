
/** @jsx jsx */
import { jsx } from 'theme-ui'

const siteContainer = props => {
    return (
        <div
          sx={{
            width: "100%",
            ml: "auto",
            mr: "auto",
            padding: 0,
            pb: 2,
            pt: 2
          }}
        >
          {props.children}
        </div>
    )
}

export default siteContainer