import { formatCurrencyString } from "use-shopping-cart"
import dollarsToCents from "dollars-to-cents"

export const formatProduct = (product) => {
  const formattedProduct = product.variants.map((variant) => {
    const formattedVariant = {
      sanityId: variant._id,
      id: variant.product_id,
      productName: product.name,
      variantName: variant.name,
      variantTitle: product.variantTitle,
      currency: "CAD",
      price: dollarsToCents(variant.price),
      formattedPrice: formatCurrencyString({
        value: dollarsToCents(variant.price),
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
    return formattedVariant
  })
  return formattedProduct
}
