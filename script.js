// Script interaktif sederhana untuk Quiz 1
function showAlert() {
  alert('Selamat datang di website Quiz 1!');
}
// Animasi fade in pada konten utama
window.onload = function() {
  var main = document.querySelector('.container');
  if(main) {
    main.style.opacity = 0;
    setTimeout(function() {
      main.style.transition = 'opacity 1s';
      main.style.opacity = 1;
    }, 200);
  }
}
