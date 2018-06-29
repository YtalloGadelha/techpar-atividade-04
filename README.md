# techpar-atividade-04
Atividade 4 treinamento Techpar

deve fazer tudo o que a atividade 03 fez, com algumas alterações
o repositório git deve se chamar "techpar-atividade-04"
em vez de action direto no form, o documento html deverá conter um módulo angularjs 1.x
o módulo deve conter um controller pra gerenciar o ng-submit do form
o controller deve usar o serviço $http para submeter via POST os dados do formulário
não devemos mais usar o modo form/urlencoded no middleware do express. em vez disso devemos usar o modo json e mandar json para o express tratar
o serviço $http deve ainda listar todas as pessoas salvas no documento html.
usar o ng-repeat para gerar uma tabela com as pessoas salvas abaixo do formulário de salvamento
ao entrar na tela o angular já deve buscar possíveis pessoas salvas para listar
toda vez que salvar uma pessoa a lista deve ser recuperada novamente
