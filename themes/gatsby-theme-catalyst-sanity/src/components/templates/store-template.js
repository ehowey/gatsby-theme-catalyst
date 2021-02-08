/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import { SanityThemeProvider } from "gatsby-theme-catalyst-sanity"

const Store = ({ data }) => {
  const allProducts = data.allSanityProduct.nodes

  return (
    <SanityThemeProvider>
      <Layout>
        <SEO title="Store" />
        <Styled.h1>Store</Styled.h1>
        <Styled.p>
          Please add gatsby-theme-catalyst-stripe for a functional store.
        </Styled.p>
        {allProducts.map((product) => (
          <div>
            <Styled.h2>{product.name}</Styled.h2>
          </div>
        ))}
      </Layout>
    </SanityThemeProvider>
  )
}

export default Store
