function modal () {
    let btn = document.querySelector('#disabled');
    let modal = document.querySelector('.modal');
    let closeModal = document.querySelector('#close');

    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.removeAttribute('style');
    });
}
modal()