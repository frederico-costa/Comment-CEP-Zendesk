// Start client and resize app

let client = ZAFClient.init();

client.on("app.registered", (e) => {
  client.invoke("resize", { width: "100%", height: "130px" });
});

// Create screen context
import Main from "./Main.js";
Main();

let cep = document.querySelector('#cep');
cep.onkeypress = function(){
  let value = cep.value;
  MascaraCEP(value);
}

function MascaraCEP(value){
  var retorno = value

  if (isNaN(retorno) == true){
    error.innerHTML = 'Digite apenas números!'
    error.style.display = 'block'
    document.getElementById("cep").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
    document.getElementById("rua").value = ""
  } 
}