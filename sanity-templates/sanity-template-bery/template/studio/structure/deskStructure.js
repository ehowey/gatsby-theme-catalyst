import S from "@sanity/desk-tool/structure-builder"
import { MdSettings, MdShare, MdList, MdInfo, MdPerson } from "react-icons/md"
import { RiLayoutTopLine } from "react-icons/ri"

const hiddenDocTypes = (listItem) =>
  ![
    "siteSettings",
    "menuLink",
    "socialLink",
    "author",
    "page",
    "post",
    "project",
    "theme",
    "themeLmColor",
    "themeDmColor",
    "siteHeader",
    "category",
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
        .title("Header")
        .icon(RiLayoutTopLine)
        .child(S.editor().schemaType("siteHeader").documentId("siteHeader")),
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Posts")
        .child(
          S.list()
            .title("Posts")
            .items([
              S.listItem()
                .title("All Posts")
                .schemaType("post")
                .child(S.documentTypeList("post").title("All Posts")),
              S.listItem()
                .title("Categories")
                .schemaType("category")
                .child(S.documentTypeList("category").title("Categories")),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
