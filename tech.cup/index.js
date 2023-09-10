const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const languagesModal = document.getElementById('languagesModal');

openModalButton.addEventListener('click', () => {
    languagesModal.showModal();
});

closeModalButton.addEventListener('click', () => {
    languagesModal.close();
});
