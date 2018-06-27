angular.module("atividade04").service("pessoaservicos", function ($http){

  this.buscapessoas = () => $http.get("list");

  this.salvapessoa = (ev) => $http.post("save",ev);
});