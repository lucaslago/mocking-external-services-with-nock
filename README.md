# Mockando HTTP Requests e testando módulos isoladamente com Nock

### Cenário:

Meu código depende de uma API externa (e.g: API do GitHub) e tenho testes para ele (muito bom!!), mas...

Alguns problemas surgiram:

- Dyn DNS outage!!!! O GitHub morreu! Meus testes estão falhando, mas eu não tenho controle sobre o GitHub!!! E
  agora? Como posso ter confiança no meu código novamente? :o

- Opa, parece que o GitHub voltou! Mas eu rodei meus testes muitas vezes e, como estou batendo na
  API real, o GitHub está bloqueando minhas requisições por motivos de rate limiting e o meu teste está falhando por motivos fora do
  meu controle!

- Opa, o GitHub alterou a mensagem de retorno, meus testes **unitários** começaram a quebrar do nada!

### Parece que os meus testes não estão tão deterministicos assim, e agora?

**Boas práticas to the rescue**: evitar testar coisas fora do meu controle! Nock it!

# Rodando código de exemplo

1. npm install
1. `npm start <github username>`

### Testes
`npm test`
