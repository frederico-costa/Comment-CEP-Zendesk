import Core from "./Core.js";

let client = ZAFClient.init();
let settings;

client.metadata().then((metadata) => {
  settings = metadata.settings;
});

const Main = async () => {
    
  const App = document.getElementById("app");
  let appBody = `<div id="main-content"></div>`;
  appBody = appBody + `<div class="container">`
  appBody = appBody + `<from>`
  appBody = appBody + `<div class="frm-row">`
  appBody = appBody + `<label for="cep">cep</label>`
  appBody = appBody + `<input type="text" name="cep" id="cep" maxlength="8">`
  appBody = appBody + `</div>`
  appBody = appBody + `<div class="frm-row">`
  appBody = appBody + `<label for="rua">rua</label>`
  appBody = appBody + `<input type="text" name="rua" id="rua" disabled>`
  appBody = appBody + `</div>`
  appBody = appBody + `<div class="frm-row">`
  appBody = appBody + `<label for="bairro">bairro</label>`
  appBody = appBody + `<input type="text" name="bairro" id="bairro" disabled>`
  appBody = appBody + `</div>`
  appBody = appBody + `<div class="frm-row">`
  appBody = appBody + `<label for="cidade">cidade</label>`
  appBody = appBody + `<input type="text" name="cidade" id="cidade" disabled>`
  appBody = appBody + `</div>`
  appBody = appBody + `<div class="frm-row">`
  appBody = appBody + `<label for="estado">estado</label>`
  appBody = appBody + `<input type="text" name="estado" id="estado" disabled>`
  appBody = appBody + `</div>`
  appBody = appBody + `</from>`
  appBody = appBody + `<div class="row">`
  appBody = appBody + `<button id="submit" class="btn">Comment</button>`
  appBody = appBody + `<div class="frm-erro">`
  appBody = appBody + `<label for="error" id="error"></label>`
  appBody = appBody + `</div>`
  appBody = appBody + `</div>`
  appBody = appBody + `<div class="frm-tickets">`
  appBody = appBody + `<label for="tickets" id="tickets"></label>`
  appBody = appBody + `</div>`
  appBody = appBody + `</div>`

  // Write App
  App.innerHTML = appBody;

  Core.aNewFunction();

  //list Ticket solicitante

  //recuppera ticket Id em tela
  let ticketId, userId;

  var client = ZAFClient.init();
    client.invoke('resize', {
        width: '100%',
        height: '200px'
    });
  
  document.client = client;
  await client.get('ticket.id').then(function(data) {
      ticketId = data['ticket.id']
  });

  //retira userId de ticketId

  await client.request(`/api/v2/tickets/${ticketId}.json`).then(
    function(data) {
      userId = data.ticket.requester_id
    }
  )

  //list Tickets do user

  await client.request(`/api/v2/users/${userId}/tickets/requested.json?per_page=1000`).then(
    function(data) { 
      let i, list =  '';
   
      for(i=0;i<data.tickets.length;i++){
        if(list == ''){
          list = `Ticket: ${data.tickets[i].id}, ${data.tickets[i].subject}.`
        } else {
          list = list + '<br>' + `Ticket: ${data.tickets[i].id}, ${data.tickets[i].subject}.`
        }
      }
    
      if(list != ''){
        document.getElementById('tickets').innerHTML = list;
      }
    },
    function(response) {
      console.error(response.responseText);
    }
  );
};

export default Main;
