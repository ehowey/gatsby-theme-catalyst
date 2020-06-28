import { useStaticQuery, graphql } from "gatsby"
export const useLithiumConfig = () => {
  const { lithiumConfig } = useStaticQuery(
    graphql`
      query {
        lithiumConfig {
          useHero
        }
      }
    `
  )
  return lithiumConfig
}
