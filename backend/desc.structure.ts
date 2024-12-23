import { singleTypes, collectionTypes, type Module } from "./schemas";

const createListItem = (S: any, module: Module) => {
  const { title, name, icon } = module;
  return S.listItem()
    .title(title)
    .id(name)
    .icon(icon)
    .child((documentId: string) =>
      S.document()
        .documentId(documentId)
        .schemaType(name)
        .title(title)
        .views([S.view.form().title("Edition")]),
    );
};

const createDocumentTypeListItem = (S: any, module: Module) => {
  const { title, name, icon } = module;
  return S.listItem()
    .title(title)
    .icon(icon)
    .child(
      S.documentTypeList(name)
        .title("Entities")
        .child((documentId: string) =>
          S.document()
            .documentId(documentId)
            .schemaType(name)
            .views([S.view.form().title("Edition")]),
        ),
    );
};

export const deskStructure = (S: any) =>
  S.list()
    .title("Structure")
    .items([
      ...singleTypes.map((item) => createListItem(S, item)),
      S.divider(),
      ...collectionTypes.map((item) => createDocumentTypeListItem(S, item)),
    ]);
