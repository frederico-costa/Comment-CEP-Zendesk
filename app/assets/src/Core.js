import Comment from "./Comment.js";

const aNewFunction = async() => {

  let cep = document.querySelector('#cep');
  let rua = document.querySelector('#rua');
  let bairro = document.querySelector('#bairro');
  let cidade = document.querySelector('#cidade');
  let estado = document.querySelector('#estado');
  let submit = document.querySelector('#submit');
  let error = document.getElementById('error');

  cep.addEventListener('blur', function(e) {
    let cep = e.target.value;
    cep=cep.replace(/\D/g,"")

    if (cep.length != 8){
      error.innerHTML = 'CEP precisa conter 8 números!'
      error.style.display = 'block'
      e.target.value = '';
      rua.value = ''
      bairro.value = ''
      cidade.value = ''
      estado.value = ''
    } else {

      let url  = `https://viacep.com.br/ws/${cep}/json`
      requestUrl(url);

      cep=cep.replace(/(\d{2})(\d)/,"$1.$2")
      cep=cep.replace(/(\d{3})(\d)/,"$1-$2")
      e.target.value = cep
    }
  });


  submit.addEventListener('click',function(e){
    e.preventDefault();
    if(rua.value == ''){
      error.innerHTML = 'Primeiro digite um CEP!'
      error.style.display = 'block'
    } else {
      error.style.display = 'none'
      Comment(cep.value,rua.value,bairro.value,cidade.value,estado.value)
      cep.value = ''
      rua.value = ''
      bairro.value = ''
      cidade.value = ''
      estado.value = ''
    }
  })

  function requestUrl(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var data = request.response;
      popularForm(data);
    }
  }

  function popularForm(resposta) {
    if("erro" in resposta){
      error.innerHTML = 'CEP não encontrado!'
      error.style.display = 'block'
      cep.value = ''
      rua.value = ''
      bairro.value = ''
      cidade.value = ''
      estado.value = ''
      return;
    }
    rua.value = resposta.logradouro
    bairro.value = resposta.bairro
    cidade.value = resposta.localidade
    estado.value = resposta.uf
  }
};

const Core = {
  aNewFunction,
};

export default Core;
