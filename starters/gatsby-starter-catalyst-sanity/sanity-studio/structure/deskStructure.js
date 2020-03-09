import S from "@sanity/desk-tool/structure-builder"
import { MdSettings, MdShare, MdList, MdInfo } from "react-icons/lib/md"

const hiddenDocTypes = listItem =>
  !["siteSettings", "menuLink", "socialLink"].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .icon(MdSettings)
        .child(
          S.list()
            .title("Site Settings")
            .items([
              S.listItem()
                .title("Metadata")
                .icon(MdInfo)
                .child(
                  S.document()
                    .title("Metadata")
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Navigation Links")
                .icon(MdList)
                .child(
                  S.documentTypeList("menuLink").title("Navigation Links")
                ),

              S.listItem()
                .title("Social Links")
                .icon(MdShare)
                .child(S.documentTypeList("socialLink").title("Social Links")),
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
