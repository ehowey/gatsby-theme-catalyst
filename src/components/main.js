/** @jsx jsx */
import { jsx } from 'theme-ui'

const siteMain = props => {
    return (
        <main
          sx={{
            flex: "1 1 auto",
            margin: theme => theme.sizes.contentMargin,
            maxWidth: "maxContentWidth",
            width: "contentWidth",
          }}
        >
          {props.children}
        </main>
    )
}

export default siteMain