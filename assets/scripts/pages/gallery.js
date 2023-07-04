const modal = document.querySelector('#modal');
const openModalBtns = Array.from(document.querySelectorAll('[data-gallery-card]'));
const modalImage = document.querySelector('#modal-image');
const modalImageName = document.querySelector('#image-name');
const closeModalBtn = document.querySelector('#close-modal');
const overlay = document.querySelector('#overlay');

// Modal component

openModalBtns.forEach(card => {
    card.addEventListener('click', () => {
        let imageSrc = modalImage.getAttribute('src');
        const imageName = card.querySelector('h3').textContent;

        imageSrc = 'assets/images/' + imageName.toLowerCase() + 'modal.jpg';
        modalImageName.textContent = imageName;
        modalImage.setAttribute('src', imageSrc);

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