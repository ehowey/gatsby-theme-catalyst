import S from "@sanity/desk-tool/structure-builder"
import { MdSettings, MdShare, MdList, MdInfo, MdPerson } from "react-icons/md"

const hiddenDocTypes = (listItem) =>
  ![
    "siteSettings",
    "menuLink",
    "socialLink",
    "author",
    "page",
    "post",
    "project",
    "mainNav",
    "socialLinks",
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
                  S.document()
                    .title("Navigation Links")
                    .schemaType("mainNav")
                    .documentId("mainNav")
                ),
              S.listItem()
                .title("Social Links")
                .icon(MdShare)
                .child(
                  S.document()
                    .title("Social Links")
                    .schemaType("socialLinks")
                    .documentId("socialLinks")
                ),
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
      S.listItem()
        .title("Pages")
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Posts")
        .child(S.documentTypeList("post").title("Posts")),
      S.listItem()
        .title("Projects")
        .child(S.documentTypeList("project").title("Projects")),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
