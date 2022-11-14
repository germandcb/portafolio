import { valida, validaTextare } from "./validaciones.js";

const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea");

textarea.addEventListener("blur", (textarea) => {
    validaTextare(textarea.target);
});

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
