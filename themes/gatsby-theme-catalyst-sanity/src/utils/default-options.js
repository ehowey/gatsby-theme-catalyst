module.exports = (themeOptions) => {
  const createSanityPages =
    themeOptions.createSanityPages == null ||
    themeOptions.createSanityPages === true
  const createSanityPosts =
    themeOptions.createSanityPosts == null ||
    themeOptions.createSanityPosts === true
  const createSanityPostsList =
    themeOptions.createSanityPostsList == null ||
    themeOptions.createSanityPostsList === true
  const createSanityProjects =
    themeOptions.createSanityProjects == null ||
    themeOptions.createSanityProjects === true
  const createSanityProjectsList =
    themeOptions.createSanityProjectsList == null ||
    themeOptions.createSanityProjectsList === true
  const projectPath = themeOptions.projectPath || "/projects"
  const postPath = themeOptions.postPath || "/posts"

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
