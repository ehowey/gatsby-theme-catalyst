import S from "@sanity/desk-tool/structure-builder"
import { MdInsertDriveFile } from "react-icons/lib/md"

const hiddenDocTypes = listItem =>
  ![
    "homePage",
    "workPage",
    "bioPage",
    "contactPage",
    "work",
    "logos",
    "categories",
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Pages")
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
      // Make a new list item
      S.listItem()
        // Give it a title
        .title("Published Work")
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title("Published Work")
            .items([
              // Add the first list item
              S.listItem()
                .title("List of Work")
                // This automatically gives it properties from the project type
                .schemaType("work")
                // When you open this list item, list out the documents
                // of the type “project"
                .child(S.documentTypeList("work").title("List of Work")),
              // Add a second list item
              S.listItem()
                .title("Categories")
                .schemaType("categories")
                // When you open this list item, list out the documents
                // of the type category"
                .child(S.documentTypeList("categories").title("Categories")),
              S.listItem()
                .title("Publisher Logos")
                .schemaType("logos")
                // When you open this list item, list out the documents
                // of the type category"
                .child(S.documentTypeList("logos").title("Publisher Logos")),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
