module.exports = (themeOptions) => {
  const sanityCreateProductPages =
    themeOptions.sanityCreateProductPages == null ||
    themeOptions.sanityCreatePages === true
  const sanityCreateProductCategoryPages =
    themeOptions.sanityCreateProductCategoryPages == null ||
    themeOptions.sanityCreatePages === true
  const sanityCreateStore =
    themeOptions.sanityCreateProductPages == null ||
    themeOptions.sanityCreatePages === true
  const sanityProductPath = themeOptions.sanityProductPath || "/products"
  const sanityStorePath = themeOptions.sanityStorePath || "/store"

  return {
    sanityCreateProductPages,
    sanityCreateProductCategoryPages,
    sanityCreateStore,
    sanityProductPath,
    sanityStorePath,
  }
}
