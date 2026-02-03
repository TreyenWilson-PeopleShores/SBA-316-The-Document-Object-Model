



let imageClass = document.querySelector(".images");
let images = []; //simages[0] = imageClass.firstElementChild;
console.log(imageClass);
for (let i = 0; i<imageClass.childElementCount; i++){
    //this loop dynamically stores each image div element
    images[i] = imageClass.firstElementChild;
    if(i===0){
        images[i] = imageClass.firstElementChild;
    } else if(i===imageClass.childElementCount-1){
        images[i] = imageClass.lastElementChild;
    } else{
        images[i] = images[i-1].nextElementSibling;
    }
}
console.log(images);

//("preference-pizza").value;
//prePizzaInput.addEventListener("input", function(event){
 //   console.log(prePizza);

//})