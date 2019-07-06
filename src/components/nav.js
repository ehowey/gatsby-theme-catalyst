/** @jsx jsx */
import { jsx } from 'theme-ui'
import { StaticQuery, graphql, Link } from "gatsby"

const siteNav = (props) => {

  return (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
      `}
      render={data => (
      <nav sx={{
        gridColumn: ['1 / -1', '2 / 3', null],
        gridRow: ['2 / 3', '1 / 2', null],
        justifySelf: ['start', 'end', null],
        alignSelf: 'center',
        marginLeft: ['1rem', 0, null]
      }}>
        <ul {...props} sx={{
          display: [props.open ? 'flex' : 'none', 'flex', null],
          listStyle: 'none',
          margin: '0',
          padding: '0',
          flexDirection: ['column', 'row', null]
        }}>
          {data.site.siteMetadata.menuLinks.map(link => (
          <li key={link.name} sx={{
            margin: ['0 0.75em', '0', null],
            padding: '0.5em'
          }}>
            <Link to={link.link} {...props} sx={{
              padding: '1rem 0.5rem',
              textDecoration: 'none',
              color: '#000'
            }}>
              {link.name}
            </Link>
          </li>
          ))}
        </ul>
    </nav>
  )}
  />
  );
}

export default siteNav;