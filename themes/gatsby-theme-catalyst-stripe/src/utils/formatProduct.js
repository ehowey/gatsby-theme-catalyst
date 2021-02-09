import { formatCurrencyString } from "use-shopping-cart"
import dollarsToCents from "dollars-to-cents"

export const formatProduct = (product) => {
  const formattedVariant = product.variants.map((variant) => {
    const regularPrice = dollarsToCents(variant.price)
    const salePrice =
      product.sale &&
      product.salePercent &&
      dollarsToCents(variant.price * ((100 - product.salePercent) / 100))
    const formatted = {
      sanityId: variant._id,
      id: variant.product_id,
      variantName: variant.displayedName,
      currency: "CAD",
      price: product.sale && product.salePercent ? salePrice : regularPrice,
      formattedPrice: formatCurrencyString({
        value: product.sale && product.salePercent ? salePrice : regularPrice,
        currency: "CAD",
      }),
      regularPrice: formatCurrencyString({
        value: regularPrice,
        currency: "CAD",
      }),
      images: variant.images,
      stock: variant.stock,
      taxable: variant.taxable,
      product_data: {
        metadata: {
          variantId: variant.product_id,
        },
      },
    }
    return formatted
  })
  const formattedProduct = {
    name: product.name,
    variantTitle: product.variantTitle,
    description: product.description,
    excerpt: product.excerpt,
    sale: product.sale,
    salePercent: product.salePercent,
    variants: formattedVariant,
  }
  return formattedProduct
}
