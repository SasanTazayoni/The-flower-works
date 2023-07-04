const modal = document.querySelector('#modal');
const openModalBtn = document.querySelectorAll('[data-gallery-card]');
const closeModalBtn = document.querySelector('#close-modal');
const overlay = document.querySelector('#overlay');

// Modal component

openModalBtn.forEach(picture => {
    picture.addEventListener('click', () => {
        modal.classList.add('open');
        overlay.classList.add('open');
    });
});

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('open');
    overlay.classList.remove('open');
}