/* Tabs init */
$(document).ready(function () {
  $('ul.tabs').tabs();
});

/* Delete button */
const linkCardList = document.querySelector('.card-list');

linkCardList.addEventListener('click', function (e) {
  if (e.target.parentElement.classList.contains('del-btn')) {
    const li = e.target.parentElement.parentElement.parentElement;
    setTimeout(function () {
      linkCardList.removeChild(li);
    }, 300);
  }
});
