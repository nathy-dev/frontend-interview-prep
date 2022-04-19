const heart = document.querySelector('.icon');
const loading = document.querySelector('.loading');

const button = document.querySelector('.like-button');

button.addEventListener("click", onClick);

function onClick() {
    heart.style.display = "none";
    loading.style.display = "unset";
    button.classList.add('active');
    setTimeout(()=> {
        loading.style.display = "none";
        heart.style.display=  "unset"
    }, 2000)
}