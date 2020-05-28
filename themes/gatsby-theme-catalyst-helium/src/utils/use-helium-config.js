import { useStaticQuery, graphql } from "gatsby"
export const useHeliumConfig = () => {
  const { heliumConfig } = useStaticQuery(
    graphql`
      query {
        heliumConfig {
          useHero
        }
      }
    `
  )
  return heliumConfig
}
