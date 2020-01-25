import S from "@sanity/desk-tool/structure-builder"
import {
  MdInsertDriveFile,
  MdSettings,
  MdShare,
  MdList,
  MdInfo,
} from "react-icons/lib/md"

const hiddenDocTypes = listItem =>
  ![
    "homePage",
    "workPage",
    "bioPage",
    "contactPage",
    "work",
    "logos",
    "categories",
    "siteSettings",
    "menuLink",
    "socialLink",
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
        .title("Published Work")
        .child(
          S.list()
            .title("Published Work")
            .items([
              S.listItem()
                .title("List of Work")
                .schemaType("work")
                .child(S.documentTypeList("work").title("List of Work")),
              S.listItem()
                .title("Categories")
                .schemaType("categories")
                .child(S.documentTypeList("categories").title("Categories")),
              S.listItem()
                .title("Publisher Logos")
                .schemaType("logos")
                .child(S.documentTypeList("logos").title("Publisher Logos")),
            ])
        ),
      S.listItem()
        .title("Website Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home Page")
                .icon(MdInsertDriveFile)
                .child(
                  S.editor()
                    .schemaType("homePage")
                    .documentId("homePage")
                ),
              S.listItem()
                .title("Work Page")
                .icon(MdInsertDriveFile)
                .child(
                  S.editor()
                    .schemaType("workPage")
                    .documentId("workPage")
                ),
              S.listItem()
                .title("Bio Page")
                .icon(MdInsertDriveFile)
                .child(
                  S.editor()
                    .schemaType("bioPage")
                    .documentId("bioPage")
                ),
              S.listItem()
                .title("Contact Page")
                .icon(MdInsertDriveFile)
                .child(
                  S.editor()
                    .schemaType("contactPage")
                    .documentId("contactPage")
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
