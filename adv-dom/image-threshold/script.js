'use strict'

const file = document.querySelector("#select-file").files[0];
const reader = new FileReader();
reader.onload = res =>{console.log(res.target.result)};

// const image_input = document.querySelector("#image-file");
// const image_container = document.querySelector(".input-image");
// image_input.addEventListener("change",(event)=> {
//     const file = event.target.files[0];
//     console.log(file)
//     const reader = new FileReader();

//     reader.addEventListener("load",(event) => {
//         const image = new Image();
//         image.src = event.target.result;
//         console.log(image.src)
//         image_container.innerHTML = `<img `

//         // image_container.appendChild(image);
//     });

//     console.log(reader.readAsDataURL(file));
// });






// image_input.addEventListener("change", function(){
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result;
//         console.log(uploaded_image)
//         document.querySelector(".input-image").innerHTML = `<img src=${uploaded_image}/>`; 
        
// });
// reader.readAsDataURL(this.files[0]);
// });
