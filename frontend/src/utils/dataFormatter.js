export function formatFullName(firstname, lastname, middlename, lastNameFirst) {
  if (middlename === null) {
    middlename = "";
  } else {
    middlename = middlename.slice(0, 1).toUpperCase() + ".";
  }
  lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();

  firstname = firstname
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .join(" ");

  if (lastNameFirst) {
    return lastname + ", " + firstname + " " + middlename;
  } else {
    return firstname + " " + middlename + " " + lastname;
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
