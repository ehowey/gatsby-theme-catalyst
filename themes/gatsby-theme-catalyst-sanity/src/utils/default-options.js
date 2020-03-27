module.exports = (themeOptions) => {
  const createSanityPages = themeOptions.createSanityPages || true
  const createSanityPosts = themeOptions.createSanityPosts || true
  const createSanityPostsList = themeOptions.createSanityPostsList || true
  const createSanityProjects = themeOptions.createSanityProjects || true
  const createSanityProjectsList = themeOptions.createSanityProjectsList || true
  const postPath = themeOptions.postPath || "/posts"
  const projectPath = themeOptions.projectPath || "/projects"

  return {
    createSanityPages,
    createSanityPosts,
    createSanityPostsList,
    createSanityProjects,
    createSanityProjectsList,
    postPath,
    projectPath,
  }
}
