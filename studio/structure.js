import S from "@sanity/desk-tool/structure-builder";

export default () => {
  return S.list()
    .title("Structure")
    .items([
      S.documentListItem().title("About").id("about").schemaType("about"),
      S.documentListItem().title("General").id("general").schemaType("general"),
      ...S.documentTypeListItems().filter(
        (item) => !["about", "general"].includes(item.getId())
      ),
    ]);
};
