/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import Product from "../product"

const Store = ({ data }) => {
  const allProducts = data.allSanityProduct.nodes

  return (
    <Layout>
      <SEO title="Store" />
      <Styled.h1>Store</Styled.h1>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
        }}
      >
        {allProducts.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </Layout>
  )
}

export default Store
