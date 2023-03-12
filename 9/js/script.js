const contactsButton = document.querySelector('.contacts__button');
const modal = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal__close');

if (contactsButton) {
  contactsButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-container--open');
  });

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-container--open');
  });
}

const links = document.querySelectorAll('.dropdown__link');

if (links) {
  links.forEach(item => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      const parent = item.parentNode;

      if (parent.classList.contains('dropdown--active')) {
        parent.classList.remove('dropdown--active');
      } else {
        const dropAll = document.querySelectorAll('.dropdown');
        dropAll.forEach((child) => {
          child.classList.remove('dropdown--active');
        })

        parent.classList.add('dropdown--active');
      }
    })
  });
}
