{  
    const welcome = () => {
        console.log("Hello to all frontend developers :D");
    }
welcome();
    const deletePhoto = () => {
        const button = document.querySelector(".js-button");
        const photo = document.querySelector(".js-image");
    
        button.addEventListener("click", () => {
            photo.remove();
        });
    }
deletePhoto();
}