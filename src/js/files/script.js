// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
  function openForm() {
    const formRulesBtn = document.querySelectorAll(".rule-btn");
    const closeRulesFormBtn = document.querySelectorAll(".modal__close");
    const modalRulesForm = document.querySelector(".modal-rule");

    formRulesBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalRulesForm.style.display = "block";
      });
    });

    closeRulesFormBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalRulesForm.style.display = "none";
      });
    });
  }
  openForm();
});
