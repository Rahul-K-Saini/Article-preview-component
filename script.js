let hide_btns = document.getElementById("footer_icons");
let shareImage = document.getElementById("share_img");
shareImage.addEventListener('mouseover',shareShow)
shareImage.addEventListener('mouseout',shareHide)
function shareShow() {
    hide_btns.classList.remove('hide');
}
function shareHide(){
    hide_btns.classList.add('hide')
}