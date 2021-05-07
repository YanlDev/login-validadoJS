const user = document.getElementById('usuario')
const pass = document.getElementById('password')
const form = document.getElementById('form')
const parrafo = document.getElementById('warnings')

form.addEventListener("submit" , e =>{

    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""

    if(user.value.length < 6){
        warnings += `No ingresaste tu usuario <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }


} )
