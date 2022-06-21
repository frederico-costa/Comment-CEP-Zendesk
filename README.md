# APP Comment CEP - Zendesk

`Este App tem a finalidade de inserir em um comentário um endereço a partir de um CEP digitado pelo usuário`

`Ele também mostra os Tickets atrelados ao solicitante`

### Tempo Gasto e Commits
- Foi gasto o tempo total de 7hrs
1. 15/06/2022 - 2hrs -> Analise da demanda e inicio de desenvolvimento da interface, criação de conta Zendesk e configuração de ambiente.
2. 21/06/2022 - 3hrs -> Conclusão de interface, Desenvolvimento da integração de CEP, desenvolvimento de funcionalidades de Comentário.
2. 21/06/2022 - 2hrs -> Desenvolvimento de listagem de tickets, validações finais, Testes Técnicos.

### Funcionalidades

- No print abaixo mostra o sistema como ficou o campo "CEP" para ser digitado pelo usuário e os campos rua, bairro, cidade, e estado para pré visualização.

![Sistema](Print_1.png?raw=true)

- insira um CEP válido no campo de "CEP" e pressione "TAB" ou Clique fora do campo para que ele possa verificar se o CEP digitado possui alguma inconsistência.
- Verifique que ele também mostra os Tickets atrelados ao solicitante do Ticket!

![Validação de CEP](Print_2.png?raw=true)

- Caso esteja tudo certo Clique no botão "Comment", e o mesmo irá criar um comentário com o endereço informado no campo de validação!

![Comentário](Print_3.png?raw=true)

- Em caso de inconsistência o sistema irá mostrar um aviso informando caso encontre alguma irregularidade!

![Inconsistência](Print_4.png?raw=true)
