export default function initAccordion() {
  const accorionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = "ativo";
  if (accorionList) {
    accorionList[0].classList.add(activeClass);
    accorionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accorionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
// console.log("teste");
