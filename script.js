const images = [
    "images/pictogram.png",
    "images/denah.png",
    "images/larangan.png",
    "images/logo.png",
    "images/grapich.png"
];

let current = 0;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

function openModal(index){
    current = index;
    modal.style.display = "flex";
    modalImg.src = images[current];
}

function closeModal(){
    modal.style.display = "none";
}

function changeSlide(step){
    current += step;

    if(current >= images.length){
        current = 0;
    }

    if(current < 0){
        current = images.length - 1;
    }

    modalImg.src = images[current];
}

// Tombol keyboard
document.addEventListener("keydown", function(e){

    if(modal.style.display === "flex"){

        if(e.key === "ArrowRight"){
            changeSlide(1);
        }

        if(e.key === "ArrowLeft"){
            changeSlide(-1);
        }

        if(e.key === "Escape"){
            closeModal();
        }

    }

});

// Klik area hitam untuk menutup
modal.addEventListener("click", function(e){
    if(e.target === modal){
        closeModal();
    }
});