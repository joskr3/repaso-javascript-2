// @ts-nocheck

let variableNumerica = 3

let miEdad = 28

let miNombre = "Josue"

let compromiso = false


let mascotas = ["pepito","gatita"]

let bicicleta = null

let libroFisica = undefined

let miArtistaFav = {
  nombre: 'Coldplay',
  cancionFav: 'Clocks',
  albumnes: [ "Parachutes" ],
  nacionalidad: 'Inglaterra'
}

//manejo del DOM
let miTitulo = document.getElementById('mi-titulo')
// @ts-ignore
// estamos obteniendo el texto de ese elemento
let contenidoMiTitulo = miTitulo.innerText
console.log( contenidoMiTitulo )



//recuperar el elemento desde el DOM

let miImagen = document.getElementById( 'imagen' );
miImagen?.setAttribute( 'alt', "Texto alternativo" );
miImagen?.setAttribute( 'src','https://cdn.pixabay.com/photo/2014/09/25/10/09/full-moon-460314_1280.jpg')


// funciones 

function saludar() {
  console.log("Hola mundo")
}

saludar()
saludar()
saludar()


function sumaDosValores( valor1 = 0, valor2 = 0 ) {
  return valor1 + valor2
 }

let sumaDosNumeros = sumaDosValores( 5, 3 )
console.log( sumaDosNumeros )


function recuperarTextoEnElDocumento() { 
  return document.body.innerText
}

let contenidoDocumento = recuperarTextoEnElDocumento()
console.log(contenidoDocumento)


let miFormulario = document.getElementById('miFormulario')

function recuperarData() {
  miFormulario.onsubmit = ( evento ) => {
    evento.preventDefault()
    let dataDeMiFormulario = new FormData( evento.target )
    let misEntradas = Object.fromEntries( dataDeMiFormulario.entries() )
    console.log( "Mis entardas del formulario tienen los valores: ", misEntradas )
  }
}

recuperarData()


// let miInputNombres = document.getElementById( 'nombres' )
// let miValorDelInputDeNombres = miInputNombres.value
// console.log( miValorDelInputDeNombres )
// miInputNombres.onchange = (event) => { 
//   console.log(event.target.value)
// }
