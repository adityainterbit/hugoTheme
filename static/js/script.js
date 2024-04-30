// JavaScript to handle accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    // Toggle accordion on click
    title.addEventListener("click", () => {
      // Close other accordion items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".accordion-content")
            .classList.remove("active");
        }
      });

      content.classList.toggle("active");
    });
  });
});

const mainNav = document.querySelector("body");
const mobileNavToggleBtn = document.querySelector(".mobileNavToggler");
const mobileNavCont = document.querySelector(".mobileNav");
const subMenuTogglerBtn = document.querySelector(".submenu-toggler");
const subMenuTogglerBtnMob = document.querySelector(".submenu-togglerMob");
const subMenuEl = document.querySelectorAll(".sub-menu");
const subMenuToggle = function () {
  let isMenuActive = false;

  mainNav.addEventListener("click", function (e) {
    if (
      e.target.closest(".submenu-toggler") !== subMenuTogglerBtn ||
      e.target.closest(".submenu-togglerMob") !== subMenuTogglerBtnMob
    ) {
      //isMenuActive = false;
      subMenuEl.forEach((el) => el.classList.add("hidden"));
    }
    if (
      e.target.closest(".submenu-toggler") === subMenuTogglerBtn ||
      e.target.closest(".submenu-togglerMob") === subMenuTogglerBtnMob
    ) {
      //isMenuActive = !isMenuActive;
      subMenuEl.forEach((el) => el.classList.toggle("hidden"));
    }

    // if (!isMenuActive) {
    //   subMenuEl.forEach((el) => el.classList.add("hidden"));
    // } else {
    //   subMenuEl.forEach((el) => el.classList.remove("hidden"));
    // }
  });

  mobileNavToggleBtn.addEventListener("click", function (e) {
    console.log(e.currentTarget);
    if (!e.currentTarget) mobileNavCont.classList.add("hidden");
    mobileNavCont.classList.toggle("hidden");
  });
};

subMenuToggle();
