import { documentStatuses } from "../data/constants";

const DOCUMENT_STATUSES = documentStatuses;

export function getStatus(id) {
  return DOCUMENT_STATUSES.find((document_status) => document_status.id == id);
}
