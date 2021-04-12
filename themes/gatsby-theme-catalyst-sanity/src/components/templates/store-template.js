/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { SanityThemeProvider } from "gatsby-theme-catalyst-sanity"

const Store = ({ data }) => {
  const allProducts = data.allSanityProduct.nodes

  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title="Store" />
        <Themed.h1>Store</Themed.h1>
        <Themed.p>
          Please add gatsby-theme-catalyst-stripe for a functional store.
        </Themed.p>
        {allProducts.map((product) => (
          <div>
            <Themed.h2>{product.name}</Themed.h2>
          </div>
        ))}
      </Layout>
    </SanityThemeProvider>
  )
}

export default Store
