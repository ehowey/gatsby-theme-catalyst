/** @jsx jsx */
import { jsx } from 'theme-ui'

const siteMain = props => {
    return (
        <main
          sx={{
            flex: "1 1 auto",
            margin: "0 auto",
            maxWidth: "maxContentWidth",
            width: "ContentWidth",
          }}
        >
          {props.children}
        </main>
    )
}

export default siteMain