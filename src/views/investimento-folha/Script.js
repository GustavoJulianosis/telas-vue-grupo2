function acao(){
 
    let modal = document.querySelector('.modal')
    let buttonClose = document.querySelector(".btnCancelar")
 
    modal.style.display = 'block';
 
    buttonClose.addEventListener("click", () =>{
 
        modal.removeAttribute("style");
    
    })
 
}
