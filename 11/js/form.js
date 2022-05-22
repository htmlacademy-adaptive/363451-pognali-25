const selectButton = document.querySelector(".country-selected__button--whole");
const selectItem = document.querySelector(".country-selected__item--whole");

selectButton.addEventListener('click', function () {
  if (selectItem.classList.contains("country-selected__item--closed")) {
    selectItem.classList.remove("country-selected__item--closed");
    selectItem.classList.add("country-selected__item--opened");
    } else {
      selectItem.classList.remove("country-selected__item--opened");
      selectItem.classList.add("country-selected__item--closed");
    }
});
