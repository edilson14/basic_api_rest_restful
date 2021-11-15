# API,REST E RESTFULT

## API

Acronimo de Application Programming Inrterface ( Interface de Programação de Aplicativos) é basicamente um conjunto de rotinas , padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações

## REST

Um acrônimo para REpresentational State Transfer( Transferência de Estado Representativa )

Será feita a transferência de dados de uma maneira simbolica, figurativa , reprsentativa, de maneira didatica.

A transferência de dados , geralmente , usando o protocolo HTTP.

Resources seria então , uma entidade, um objeto.

### 6 Necessidade (constraints ) para ser RESTful

- _Client-server_: Separação do cliene e do armazenamento de dados(servidor), dessa forma , poderemos ter uma portabilidade do nosso sistema, usando React para WEB e React Native para SmartPhone por exemplo

- _Stateless_: Cada requisição que o cliente faz para o servidor , deveraá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requesição(REQUEST).

  - Exemplo: A sessão do usuário deverá ser enviada em todas as requisições , para saber se aquele usuário está autenticado e apto para usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior.

- _Cacheable_: As respostas para uma requisição , devera ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um end-point, sem precisar saber da complexidade, de quais passos estão sendo necessarios para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on Demand (Optional)_: Dá a possiblidade da nossa aplicação pegar códigos como o javascript, por exemplo, e executar no cliente

## RESTFUL

É a aplicação dos padrões REST.

## BOAS Práticas

- Utilizar Verbos HTTP para as nossas requisições
- Utilizar plural ou singular na criação de end-point? _Não Importa!_ use um padrão !!
- Não deixar bara no final do end-point.
- Nunca deixe o cliente sem resposta!

### Verbos HTTP

- GET: Receber dadis de um Resource
- POST: Enviar dados ou informação para serem processados por um Resource
- PUT: Atualizar dados de um Resource
- DELETE: deletar dados de um Resource

### Status das Respostas

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: Created
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx:Client Error
  - 400: Bad Request
  - 404: Not Found
- 5xx: Server Error
  - 500: Internal Server Error
