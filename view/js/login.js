
const mensaje = document.querySelector("#mensaje");
const botonLogin = document.querySelector("#btn-login");
const loginform = document.querySelector("#loginform");

botonLogin.addEventListener("click",(e)=>{
    
    fetch("/api",
    {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
            action:"login",
            email:loginform.email.value,
            password:loginform.password.value
        }), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json())
    .catch(error => console.error('Error:', error))
    .then(response =>{
        console.log(response);
        mensaje.textContent=response.mensaje;
    });
    
    e.preventDefault();
});