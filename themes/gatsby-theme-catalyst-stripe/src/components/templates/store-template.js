/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { SEO, Layout } from "gatsby-theme-catalyst-core"
import Product from "../product"
import Cart from "../cart"

const Store = ({ data }) => {
  const allProducts = data.allSanityProduct.nodes

  return (
    <Layout>
      <SEO title="Store" />
      <Styled.h1>Store</Styled.h1>
      {allProducts.map((product) => (
        <Product key={product.name} product={product} />
      ))}
      <Cart />
    </Layout>
  )
}

export default Store
