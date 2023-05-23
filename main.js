const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
  const checkbox = document.getElementById("miCheckbox");
  const emailInput = document.getElementById("validationInput");
  
  if (!checkbox.checked && emailInput.value === "") {
    alert("Debes aceptar los términos y condiciones y proporcionar tu correo electrónico.");
  } else if (!checkbox.checked) {
    alert("Debes aceptar los términos y condiciones.");
  } else if (emailInput.value === "") {
    alert("Debes proporcionar tu correo electrónico.");
  } else {
    alert("¡Felicitaciones! Pronto escucharás de nosotros.");
  }
});
