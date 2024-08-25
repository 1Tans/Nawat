
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000); // เปลี่ยนภาพทุกๆ 4 วินาที
}
document.getElementById("menu-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector("nav ul").classList.toggle("active");
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    var popupBox = document.getElementById('popup-box');
    if (popupBox.style.display === "none" || popupBox.style.display === "") {
        popupBox.style.display = "block";
        popupBox.style.animation = "fade 0.2s forwards"; // เพิ่มแอนิเมชันเมื่อสี่เหลี่ยมแสดงผล
    } else {
        popupBox.style.display = "none";
    }
});
