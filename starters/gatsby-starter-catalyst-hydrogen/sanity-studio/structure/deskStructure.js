import S from "@sanity/desk-tool/structure-builder"
import {
  MdSettings,
  MdShare,
  MdList,
  MdInfo,
  MdHome,
  MdFolder,
  MdInsertDriveFile,
} from "react-icons/lib/md"

const hiddenDocTypes = listItem =>
  ![
    "siteSettings",
    "menuLink",
    "socialLink",
    "project",
    "post",
    "homePage",
    "work",
    "categories",
    "logos",
    "page",
  ].includes(listItem.getId())

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
      S.listItem()
        .title("Home Page")
        .icon(MdHome)
        .child(
          S.editor()
            .schemaType("homePage")
            .documentId("homePage")
        ),
      S.listItem()
        .title("Work")
        .icon(MdFolder)
        .child(
          S.list()
            .title("Work")
            .items([
              S.listItem()
                .title("Work Page")
                .icon(MdInsertDriveFile)
                .child(
                  S.editor()
                    .schemaType("workPage")
                    .documentId("workPage")
                ),
              S.listItem()
                .title("Work")
                .schemaType("work")
                .child(S.documentTypeList("work").title("List of Work")),
              S.listItem()
                .title("Categories")
                .schemaType("categories")
                .child(S.documentTypeList("categories").title("Categories")),
              S.listItem()
                .title("Featured Logos")
                .schemaType("logos")
                .child(S.documentTypeList("logos").title("Publisher Logos")),
            ])
        ),
      S.listItem()
        .title("Pages")
        .icon(MdFolder)
        .child(S.documentTypeList("page").title("Pages")),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
