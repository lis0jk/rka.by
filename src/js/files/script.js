// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
  function openForm() {
    const formRulesBtn = document.querySelectorAll(".rule-btn");
    const closeFormBtn = document.querySelectorAll(".modal__close");
    const modalForm = document.querySelector(".modal");
    const modalRulesForm = document.querySelector(".modal-rule");

    const formGratBtn = document.querySelectorAll(".btn-grat");
    const modalGratForm = document.querySelector(".modal-grat");

    const formCommBtn = document.querySelectorAll(".btn-comm");
    const modalCommForm = document.querySelector(".modal-comm");

    formRulesBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalRulesForm.style.display = "block";
      });
    });

    formGratBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalGratForm.style.display = "block";
      });
    });

    formCommBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalCommForm.style.display = "block";
      });
    });

    closeFormBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        modalForm.style.display = "none";
        modalCommForm.style.display = "none";
      });
    });
  }
  openForm();

  $(".brka__structure-name").click(function (event) {
    if ($(".brka__structure-info").hasClass("one")) {
      $(".brka__structure-name").not($(this)).removeClass("active");
      $(".brka__structure-description").not($(this).next()).slideUp();
    }
    $(this).toggleClass("active").next().slideToggle();
  });

  $(".account__act-title").click(function (event) {
    if ($(".account__act").hasClass("one")) {
      $(".account__act-title").not($(this)).removeClass("active");
      $(".account__act-box").not($(this).next()).slideUp();
    }
    $(this).toggleClass("active").next().slideToggle();
  });
});
