const num1 = 10

const num2 = 15

if (num1 == 10 && num2 != 14) {
    console.log('Es verdadero')
} else {
    console.log('Es falso')
}
/* saludar("Gerardo", "Santana", 25); */

/* function saludar(x, y = "sosa", z = 10) {
    console.log('¿Hola como estas?', x + ' ' + y + ' y su edad es ' + z)
} */



 saludardos = (x, y, z) => console.log("¿Hola como estas?", x + " " + y + " y su edad es " + z);
    


saludardos("Gerardo", "Santana", 25);

const saludar = function () {
    console.log("¿Hola como estas?", x + " " + y + " y su edad es " + z);
}


const boton = document.querySelector("button");
const fondo = document.querySelector("body")

const pintar = (color) => {
        fondo.style.backgroundColor = color
}

/* boton.addEventListener('click', pintar) */


//declaracion de funcion anonima
boton.addEventListener('click', function (){
     pintar("red")
})


//funcion arrow
boton.addEventListener("click",  ()=> {
  pintar("red");
});

boton.addEventListener('blur', () => {
    boton.style.backgroundColor = "yellow"
})



const input = document.querySelector('#input')

input.addEventListener('focus', () => {
    input.style.backgroundColor = "green"
})


input.addEventListener('blur', ()=> {
     input.style.backgroundColor = "yellow";
})

const boton1 = document.getElementById('green')
const boton2 = document.getElementById('blue')
const boton3 = document.getElementById('yellow')


boton1.addEventListener('click', () => {
    fondo.style.backgroundColor = "green"
})

boton2.addEventListener("click", () => {
  fondo.style.backgroundColor = "blue";
});

boton3.addEventListener("click", () => {
  fondo.style.backgroundColor = "yellow";
});


