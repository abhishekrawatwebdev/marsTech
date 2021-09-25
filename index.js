let modalCloseBtn = document.getElementById("modal_close_button");
let modalSection = document.getElementById("supplier_modal_section");
let addAssociationBtn = document.getElementById("add_association_button");
modalCloseBtn.addEventListener('click', () => {
    modalSection.style.opacity = 0;
    modalSection.style.visibility = "hidden";

});
addAssociationBtn.addEventListener('click', () => {
    modalSection.style.visibility = "visible";
    modalSection.style.opacity = 1;
});