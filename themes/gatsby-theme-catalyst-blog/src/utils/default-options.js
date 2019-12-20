module.exports = themeOptions => {
  const basePath = themeOptions.basePath || `/blog`
  const contentPath = themeOptions.contentPath || `content/posts`
  const assetPath = themeOptions.assetPath || `content/assets`
  const excerptLength = themeOptions.excerptLength || `140`

  return {
    basePath,
    contentPath,
    assetPath,
    excerptLength,
  }
}
