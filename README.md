# API - Payload pix - copy and paste static

Desenvolvido em Nodejs - v.6.14.15;<br>
Endpoint:<br>
POST - https://services-cc.herokuapp.com/pix<br>
body request: {<br>
  "pixKey": String,<br>
  "name": String,<br>
  "city": String,<br>
  "idTransaction": String,<br>
  "message": String,<br>
  "amount": String<br>
});<br>

Utilizado documentação do Bacen para construção da payload<br>
Doc: https://www.bcb.gov.br/content/estabilidadefinanceira/pix/Regulamento_Pix/II_ManualdePadroesparaIniciacaodoPix.pdf<br>
Versão Versão 2.6.3

