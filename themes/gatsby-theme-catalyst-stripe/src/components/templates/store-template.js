/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Seo, Layout } from "gatsby-theme-catalyst-core"
import Product from "../product"
import Cart from "../cart"

const Store = ({ data }) => {
  const allProducts = data.allSanityProduct.nodes

  return (
    <Layout>
      <Seo title="Store" />
      <Themed.h1>Store</Themed.h1>
      {allProducts.map((product) => (
        <Product key={product.name} product={product} />
      ))}
      <Cart />
    </Layout>
  )
}

export default Store
