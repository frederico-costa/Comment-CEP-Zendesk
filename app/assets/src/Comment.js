function submitComment(ticketId,cep,rua,bairro,cidade,estado) {
    $("#content").hide();
    $("#loading").fadeIn();
    var update = {
        'ticket': {
            'comment': {
                'body': 'CEP: '+ cep +'\nRua: ' + rua + ', Bairro: ' + bairro + '\nCidade: ' + cidade + ', Estado: ' + estado,
                'public': false
            }
        }
    }
    var update_settings = {
        url: '/api/v2/tickets/' + ticketId + '.json',
        type: 'PUT',
        dataType: 'json',
        data: update
    };
    document.client.request(update_settings).then(
    function(data) {
        $("#loading").fadeOut();
        $("#content").show();
    },
    function(response) {
        showError(response);
    });
}

function showError(response) {
    var error_data = {
        'status': response.status,
        'statusText': response.statusText
    };
    var source = $("#error-template").html();
    var template = Handlebars.compile(source);
    var html = template(error_data);
    $("#content").html(html);
}

const updateComment = function(cep,rua,bairro,cidade,estado) {
    var client = ZAFClient.init();
    client.invoke('resize', {
        width: '100%',
        height: '200px'
    });
    document.client = client;
    client.get('ticket.id').then(function(data) {
        submitComment(data['ticket.id'],cep,rua,bairro,cidade,estado);
    });
}

export default updateComment;