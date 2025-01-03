<h1 align="center"> Waiting System SSE </h1>
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <p align="center">
    Projeto para que os usuarios acompanhem as senhas serem chamadas. Foi criado para fortalecer conhecimento com SSE e Hateoas.  
    <br />
    <br />
  </p>
</div>



## Sobre o Projeto
<h3 align="center">O que é SSE</h3>
<h4>Server Sent Events (SSE)</h4>
   
   <p> Tecnologia de comunicação web que permite que um servidor envie dados de forma assíncrona para um cliente, sem a necessidade de fazer solicitações repetidas.</p>
   <p>  Muito usado para aplicações que precisam de comunicação unidirecional do servidor para o cliente, como notificações, atualizações de status, ou feeds de dados em tempo real.</p>
<h4>SSE vs WEBSOCKET</h4>
<br>
<table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr>
      <th style="padding: 8px; background-color:rgb(39, 145, 0); color: white;">Característica</th>
      <th style="padding: 8px; background-color: rgb(39, 145, 0);color: white;">SSE</th>
      <th style="padding: 8px; background-color: rgb(39, 145, 0);color: white;">WebSocket</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px;">Protocolo</td>
      <td style="padding: 8px;">HTTP unidirecional</td>
      <td style="padding: 8px;">TCP bidirecional</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Conexão</td>
      <td style="padding: 8px;">Apenas o servidor envia dados ao cliente</td>
      <td style="padding: 8px;">Cliente e servidor trocam mensagens em tempo real</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Compatibilidade</td>
      <td style="padding: 8px;">Suporte nativo em navegadores modernos (sem bibliotecas extras)</td>
      <td style="padding: 8px;">Requer bibliotecas ou APIs específicas</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Estado da conexão</td>
      <td style="padding: 8px;">Reestabelece automaticamente a conexão em caso de falha</td>
      <td style="padding: 8px;">Requer lógica personalizada para reconectar</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Complexidade</td>
      <td style="padding: 8px;">Simples de implementar</td>
      <td style="padding: 8px;">Mais complexo, mas poderoso</td>
    </tr>
    <tr>
      <td style="padding: 8px;">Casos de uso</td>
      <td style="padding: 8px;">Notificações em tempo real, feeds de notícias</td>
      <td style="padding: 8px;">Jogos, chats, sistemas de negociação</td>
    </tr>
  </tbody>
</table>


<br><br><br>
<h3 align="center">O que é Hateos e JSON HAL</h3>
  <h4> Hateos </h4>
  
  <p>  Hypermedia as the Engine of Application State é um conceito ou princípio da arquitetura REST.</p> 


 *  As APIs devem fornecer hipermídia (links) para que os clientes possam navegar nos recursos dinamicamente, sem precisar conhecer previamente toda a estrutura da API.
 * O cliente descobre ações possíveis em tempo de execução, com base nos links retornados na resposta.


<br />
<h4> JSON HAL </h4>
<p> Hypertext Application Language é uma implementação específica do HATEOAS. Ele define um formato padrão para representar hipermídia em JSON, permitindo a utilização prática do HATEOAS.</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Frameworks

Saiba mais sobre os frameworks que usamos.

* [![Angular][Angular.io]][Angular-url]
* [![Spring][Java]][Java-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Como executar seu frontend

### dentro da pasta app

### Instale as depencias:

  ```sh
  npm install 
  ```

## Start Server 

   ```sh
   npm run start
   ```

## Contato

Linkedin - [Eduarda Alves](https://www.linkedin.com/in/eduarda-alves-0b84ba178/) 





<!-- MARKDOWN LINKS & IMAGES -->
[Java]: https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white
[Java-url]: https://www.java.com/pt-BR/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/

