console.log("cześć!")

let przycisk = document.querySelector(".przycisk")
let zdjecie = document.querySelector(".zdjecie")

console.log(przycisk)
przycisk.addEventListener("click", () => {
    zdjecie.remove();
});