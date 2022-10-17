

console.log(document.title)


let valeur = document.title;
console.log(valeur);
//let adress = document.getElementById("adress");
document.title = "Modifying the DOM"
//console.log(adress.innerHTML);
// console.log(valeur.length)

console.log(valeur)
console.log(document.title)


 let bgcolor = document.querySelector("body");
// bgcolor.style.backgroundColor = '#FF69B4';
bgcolor.style.backgroundColor = 'rgba(255, 99, 71, 0.5)';

const body = document.querySelector('body');
console.log(body);
for (let child of body.children){
    console.log(child.tagName);
}

 

