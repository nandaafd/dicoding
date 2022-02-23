
const p = document.querySelectorAll('article p');
for(let i = 0; i < p.length; i++){
p[i].style.color = "black";
p[i].style.fontSize = "17px";
}
const judul = document.querySelectorAll('article h2');
judul[0].style.color = 'light-blue';
judul[2].innerHTML = "OBJEK WISATA DI LAMONGAN";

const popProfil = document.getElementsByClassName('tombol');
function popupProfil(){
    alert("Maaf Halaman Sedang Dalam Perbaikan");
}
const popArtikel = document.getElementsByClassName('tombol');
function popupArtikel(){
    alert("Maaf Halaman Sedang Dalam Perbaikan");
}


