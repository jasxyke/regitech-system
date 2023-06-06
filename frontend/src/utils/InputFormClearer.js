function clearTextInput(textInput) {
  textInput.clearTextForm();
}

function clearTextInputs(...textInputs) {
  for (let textInput of textInputs) {
    textInput.clearTextForm();
  }
}

export { clearTextInput, clearTextInputs };
