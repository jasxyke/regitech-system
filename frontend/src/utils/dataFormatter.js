export function formatFullName(
  firstname,
  lastname,
  lastNameFirst,
  middlename = ""
) {
  if (lastNameFirst) {
    return lastname + ", " + firstname;
  } else {
    return firstname + " " + lastname;
  }
}

export function listDocuments(documents) {
  const DOCUMENT_LIMIT = 3;
  var documentString = "";
  for (let i = 0; i < documents.length; i++) {
    if (i === DOCUMENT_LIMIT) {
      return documentString + "...";
    }
    if (i === documents.length - 1) {
      documentString += documents[i].document_type.name;
      continue;
    }
    documentString += documents[i].document_type.name + ", ";
  }
  return documentString;
}
