module.exports = (themeOptions) => {
  const sanityCreatePages =
    themeOptions.sanityCreatePages == null ||
    themeOptions.sanityCreatePages === true
  const sanityCreatePosts =
    themeOptions.sanityCreatePosts == null ||
    themeOptions.sanityCreatePosts === true
  const sanityCreatePostsList =
    themeOptions.sanityCreatePostsList == null ||
    themeOptions.sanityCreatePostsList === true
  const sanityCreateProjects =
    themeOptions.sanityCreateProjects == null ||
    themeOptions.sanityCreateProjects === true
  const sanityCreateProjectsList =
    themeOptions.sanityCreateProjectsList == null ||
    themeOptions.sanityCreateProjectsList === true
  const sanityProjectPath = themeOptions.sanityProjectPath || "/projects"
  const sanityPostPath = themeOptions.sanityPostPath || "/posts"

  return {
    sanityCreatePages,
    sanityCreatePosts,
    sanityCreatePostsList,
    sanityCreateProjects,
    sanityCreateProjectsList,
    sanityPostPath,
    sanityProjectPath,
  }
}
