// Create Home Page
async function createSanityHomePage(actions, reporter) {
  const { createPage } = actions

  reporter.info(`Creating home page`)

  createPage({
    path: "/",
    component: require.resolve("./src/components/home-page/home-page"),
    context: {},
  })
}

// Create Work Page
async function createSanityWorkPage(actions, reporter) {
  const { createPage } = actions

  reporter.info(`Creating work page`)

  createPage({
    path: "/work/",
    component: require.resolve("./src/components/work-page/work-query"),
    context: {},
  })
}

// Create all the pages
exports.createPages = async ({ actions, reporter }) => {
  await createSanityHomePage(actions, reporter)
  await createSanityWorkPage(actions, reporter)
}
