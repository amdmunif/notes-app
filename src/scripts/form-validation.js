const formValidation = (formInput) => {
  const titleFormInput = formInput.elements.title;
  const bodyFormInput = formInput.elements.body;

  const blurEventHandler = (event) => {
    // Validate the field
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute("aria-describedby");
    const connectedValidationEl = connectedValidationId
      ? document.getElementById(connectedValidationId)
      : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
      connectedValidationEl.classList.remove("text-dark");
      connectedValidationEl.classList.add("text-danger");
    } else {
      connectedValidationEl.innerText =
        connectedValidationEl.dataset.defaulttext || "";
      console.log(connectedValidationEl.dataset);
      connectedValidationEl.classList.remove("text-danger");
      connectedValidationEl.classList.add("text-dark");
    }
  };

  const customValidationTitle = (event) => {
    event.target.setCustomValidity("");
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
      return;
    }

    if (event.target.validity.tooShort) {
      event.target.setCustomValidity("Minimal panjang adalah 3 karakter");
      return;
    }
  };

  titleFormInput.addEventListener("change", customValidationTitle);
  titleFormInput.addEventListener("invalid", customValidationTitle);
  titleFormInput.addEventListener("blur", blurEventHandler);

  const customValidationBody = (event) => {
    event.target.setCustomValidity("");
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi.");
      return;
    }

    if (event.target.validity.tooShort) {
      event.target.setCustomValidity("Minimal panjang adalah 6 karakter");
      return;
    }
  };

  bodyFormInput.addEventListener("change", customValidationBody);
  bodyFormInput.addEventListener("invalid", customValidationBody);
  bodyFormInput.addEventListener("blur", blurEventHandler);
};

export default formValidation;
