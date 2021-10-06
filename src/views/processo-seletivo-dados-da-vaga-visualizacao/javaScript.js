function modal () {
    let btn = document.querySelector('#disabled');
    let modal = document.querySelector('.modal');
    let cancelar = document.querySelector("#cancelar")

    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });


    cancelar.addEventListener('click', () => {
        modal.removeAttribute("style");
    });
}
modal()