const button = document.querySelector(".share-bttn");
const share = document.querySelector(".share");

button.addEventListener('click',()=>{
    share.classList.toggle("hidden")
    const shareTF = share.classList.contains("hidden");
})