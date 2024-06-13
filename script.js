// @ts-nocheck

let variableNumerica = 3
let miEdad = 28
let miNombre = "Josue"
let compromiso = false
let mascotas = [ "pepito", "gatita" ]
let bicicleta = null
let libroFisica = undefined
let miArtistaFav = {
  nombre: 'Coldplay',
  cancionFav: 'Clocks',
  albumnes: [ "Parachutes" ],
  nacionalidad: 'Inglaterra'
}

//manejo del DOM
let miTitulo = document.getElementById( 'mi-titulo' )
// @ts-ignore
// estamos obteniendo el texto de ese elemento
let contenidoMiTitulo = miTitulo.innerText
console.log( contenidoMiTitulo )



//recuperar el elemento desde el DOM

let miImagen = document.getElementById( 'imagen' );
miImagen.setAttribute( 'alt', "Texto alternativo" );
miImagen.setAttribute( 'src', 'https://cdn.pixabay.com/photo/2014/09/25/10/09/full-moon-460314_1280.jpg' )


// funciones 

function saludar() {
  console.log( "Hola mundo" )
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
console.log( contenidoDocumento )


let miFormulario = document.getElementById( 'miFormulario' )

miFormulario.onsubmit = ( evento ) => {
  evento.preventDefault()

  let formulario = evento.target
  let dataDeMiFormulario = new FormData( formulario )
  let misEntradas = Object.fromEntries( dataDeMiFormulario.entries() )
  console.log( "Mis entardas del formulario tienen los valores: ", misEntradas )
  let misNombres = misEntradas.nombres.toUpperCase()
  let misApellidos = misEntradas.apellidos.toLocaleLowerCase()
  console.log( misNombres )
  console.log( misApellidos )
  mostrarAlerta( +misEntradas.edad )
}

// let miInputNombres = document.getElementById( 'nombres' )
// let miValorDelInputDeNombres = miInputNombres.value
// console.log( miValorDelInputDeNombres )
// miInputNombres.onchange = (event) => { 
//   console.log(event.target.value)
// }

function mostrarAlerta( edad = 0 ) {
  edad > 18 && window.alert( "Puedes acceder al contenido" )
  edad < 18 && window.alert( "No puedes acceder al contenido" )
}


let nombresCompletos = 'ALbert Camus'

let longitud = nombresCompletos.length

console.log( longitud )

let nuevoNombre = nombresCompletos.replace( 'Camus', "Einstein" )

console.log( nuevoNombre )


// map vs filter y reduce 


// map 
// me sirve para recorrer un array



// let miNuevoArraydeArtistas = arrayArtistas.map( ( artista ) => {
//   let artistUppercase = artista.toUpperCase()  
//   return artistUppercase
// } )

// console.log( miNuevoArraydeArtistas )


let capitalizarPalabra = ( texto = '' ) => {
  let letraEnMayuscula = texto.charAt( 0 ).toUpperCase()
  let restoDeLaCadena = texto.slice( 1 )
  let palabraCapitalizada = letraEnMayuscula.concat( restoDeLaCadena )
  return palabraCapitalizada
}

console.log( capitalizarPalabra( 'jhon' ) )


let listaDeArtistas = document.getElementById( 'mis-artistas' )

// let elemento = document.createElement( 'li' )
// elemento.textContent = miNuevoArraydeArtistas[0]

// listaDeArtistas.appendChild(elemento)
let arrayArtistas = [ 'hozier', 'mitski', 'queen' ]

arrayArtistas.map( ( artista ) => {
  let artistUppercase = capitalizarPalabra( artista )
  let nuevoArtista = document.createElement( 'li' )
  nuevoArtista.textContent = artistUppercase
  listaDeArtistas.appendChild( nuevoArtista )
} )


// fetch y axios 
let url = ''

async function getResponse( url ) {
  const response = await fetch(
    url
  );
  const data = await response.json();
  return data
}

//import axios from 'axios'

async function getResponseWithAxios( url ) {
  const data = await axios.get(
    url
  );
  return data
}
// Authorization: Client-ID YOUR_ACCESS_KEY

async function getResponse2() {
  const accesKey = 'CzKkPqjbq5pFQYV9vGcrBVLv7J3ThP7M4DMjIoG4P1U'
  const secretKey = '305452'
  const apikey = `${secretKey} ${accesKey}`
  const response = await fetch(
    'https://api.unsplash.com/photos/random',
    {
      method: 'GET',
      headers: {
        Authorization: ` Bearer ${apikey}`
      }
    }
  );
  if ( !response.ok ) {
    throw new Error( `HTTP error! status: ${response.status}` );
  }
  const data = await response.json();
  return data
}


getResponse2()
