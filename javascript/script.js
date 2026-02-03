let imageClass = document.querySelector(".images");
let images = []; //
console.log(imageClass);
for (let i = 0; i<imageClass.childElementCount; i++){
    //this loop dynamically stores each image div element
    images[i] = imageClass.firstElementChild;
    if(i===0){
        //This sets the initial location
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

let preferencePizza = document.getElementById("preference-pizza");
let homePizzaText = document.getElementById("homemadeBodyText");
let frozenPizzaText = document.getElementById("frozenBodyText");

preferencePizza.addEventListener("input", function(event){
    preferredPizzaTop = preferencePizza.value;
    if(preferredPizzaTop==="cheese"||preferredPizzaTop==="Cheese"){
        //Add form validation to this for requiring lowercase or uppsercase CHEESE
        alert("CHEESE");
        homePizzaText.innerHTML = "<p>You would <em><b>not</b></em> like this pizza, it has pepperoni on it.</p>"
        console.log(screen.height);
    } else if(preferredPizzaTop==="pepperoni"||preferredPizzaTop==="Pepperoni"){
        alert("PEPPERONI");
        frozenPizzaText.innerHTML = "<p>You would <em><b>LOVE</b></em> this pizza, it has pepperoni on it!</p>"
        console.log(screen.width);
    }
})

let dropDownMenu = document.getElementById("pizza-dropdown");
function bodyBackgroundColor(color){
    // The function changes the background color of the body
    document.querySelector("body").style.backgroundColor = color;
}
let fragment = document.createDocumentFragment();
dropDownMenu.addEventListener("change", function(event){
    let dropValue = dropDownMenu.value;
    if(dropValue==="pepperoni"){
        //document.querySelector("body").style.backgroundColor = "red";
        bodyBackgroundColor("red");
        window.alert("WARNING - THE BACKGROUND IS PEPPERONI");
        let pepperoniText = document.createElement("p")
        pepperoniText.innerHTML="<div class='card'>The background is now pepperoni!</div>"
        fragment.appendChild(pepperoniText);
    } else if (dropValue==="cheese"){
        bodyBackgroundColor("yellow");
        window.alert("WARNING - THE BACKGROUND IS CHEESE");
        
        let cheeseText = document.createElement("p");
        cheeseText.innerHTML="<div class='card'>The background is now cheese!</div>"
        fragment.appendChild(cheeseText);
    }
    document.body.append(fragment);
})


email = document.getElementById("email");
email.addEventListener("submit", function(event){
    event.preventDefault();
    alert("ERROR");
});