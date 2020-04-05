import S from "@sanity/desk-tool/structure-builder"
import {
  MdSettings,
  MdShare,
  MdList,
  MdInfo,
  MdHome,
  MdInsertDriveFile,
  MdPerson,
  MdDashboard,
} from "react-icons/lib/md"

const hiddenDocTypes = (listItem) =>
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
    "theme",
    "workPage",
    "author",
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
                .title("Authors")
                .icon(MdPerson)
                .child(S.documentTypeList("author").title("Author")),
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
        .child(S.editor().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Work Page")
        .icon(MdInsertDriveFile)
        .child(S.editor().schemaType("workPage").documentId("workPage")),
      S.listItem()
        .title("Work")
        .child(
          S.list()
            .title("Work")
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
                .title("Featured Logos")
                .schemaType("logos")
                .child(S.documentTypeList("logos").title("Publisher Logos")),
            ])
        ),
      S.listItem()
        .title("Other Pages")
        .child(S.documentTypeList("page").title("Pages")),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
