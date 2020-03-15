/** @jsx jsx */
import { jsx } from "theme-ui"
import PortableText from "@sanity/block-content-to-react"
import { useSanityConfig } from "./use-sanity-config"
import serializers from "./serializers"

const SanityContent = ({ data }) => {
  const { sanityDataset, sanityProjectId } = useSanityConfig()
  const sanityConfig = {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  }
  return (
    <PortableText blocks={data} serializers={serializers} {...sanityConfig} />
  )
}

export default SanityContent
