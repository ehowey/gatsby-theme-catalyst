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
        gridColumn: '1 / -1',
        gridRow: '2 / 3',
        justifySelf: 'start',
        alignSelf: 'center',
        marginLeft: '1rem'
      }}>
        <ul {...props} sx={{
          listStyle: 'none',
          margin: '0',
          padding: '0',
          display: 'flex',
          flexDirection: 'row'
        }}>
          {data.site.siteMetadata.menuLinks.map(link => (
          <li key={link.name} sx={{
            margin: '0 0.75em'
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