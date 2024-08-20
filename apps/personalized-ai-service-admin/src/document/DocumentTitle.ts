import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "id";

export const DocumentTitle = (record: TDocument): string => {
  return record.id?.toString() || String(record.id);
};
