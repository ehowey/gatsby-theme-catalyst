module.exports = themeOptions => {
  const useSanityPages = themeOptions.useSanityPages || true
  const useSanityPosts = themeOptions.useSanityPosts || true
  const useSanityProjects = themeOptions.useSanityProjects || true
  const postPath = themeOptions.postPath || "/posts"
  const projectPath = themeOptions.projectPath || "/projects"

  return {
    useSanityPages,
    useSanityPosts,
    useSanityProjects,
    postPath,
    projectPath,
  }
}
