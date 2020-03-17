module.exports = themeOptions => {
  const useSanityPages = themeOptions.useSanityPages || false
  const useSanityPosts = themeOptions.useSanityPosts || false
  const useSanityProjects = themeOptions.useSanityProjects || false
  const pagePath = themeOptions.pagePath || "/"
  const postPath = themeOptions.postPath || "/posts"
  const projectPath = themeOptions.projectPath || "/projects"

  return {
    useSanityPages,
    useSanityPosts,
    useSanityProjects,
    pagePath,
    postPath,
    projectPath,
  }
}
