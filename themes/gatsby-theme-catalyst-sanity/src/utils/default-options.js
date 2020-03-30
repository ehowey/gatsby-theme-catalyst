module.exports = (options) => {
  const createSanityPages = options.createSanityPages || true
  const createSanityPosts = options.createSanityPosts || true
  const createSanityPostsList = options.createSanityPostsList || true
  const createSanityProjects = options.createSanityProjects || true
  const createSanityProjectsList = options.createSanityProjectsList || true
  const postPath = options.postPath || "/posts"
  const projectPath = options.projectPath || "/projects"

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
