function createFileList(files) {
  const dataTransfer = new DataTransfer();

  for (let i = 0; i < files.length; i++) {
    dataTransfer.items.add(files[i]);
  }

  return dataTransfer.files;
}

export function converToFileList(files) {
  const fileList = createFileList(files);
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.multiple = true;
  fileInput.files = fileList;
  const fileListObject = fileInput.files;
  console.log(fileListObject);
  return fileListObject;
}
