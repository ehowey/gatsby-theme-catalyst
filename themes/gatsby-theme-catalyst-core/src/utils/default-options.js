module.exports = (themeOptions) => {
  const contentPath = themeOptions.contentPath || `content/pages`
  const assetPath = themeOptions.assetPath || `content/assets`

  return {
    contentPath,
    assetPath,
  }
}
