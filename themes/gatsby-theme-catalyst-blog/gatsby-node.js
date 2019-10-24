exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `mdxBlogPost`) {
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: "featuredImage",
      value: parent.frontmatter.featuredImage,
    })
  }
}

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type mdxBlogPost implements Node @infer {
//       fields: mdxBlogPostFields
//     }
//     type mdxBlogPostFields @infer {
//       id: ID!
//       featuredImage: File
//     }
//   `
//   createTypes(typeDefs)
// }
