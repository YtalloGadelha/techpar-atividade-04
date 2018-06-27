angular.module("atividade04").controller("pessoacontrollers", function(pessoaservicos){

  this.novo = {};

  this.listar = () => pessoaservicos.buscapessoas().then( (ret) => {
    this.pessoas = ret.data;
  });

  // carregar a lista imediatamente após carregar o controlador
  this.listar();

  this.salvapessoa = () => {
    pessoaservicos.salvapessoa(this.novo).then( (ret) => {
      console.log(ret.data)
      alert("Pessoa salvo com id " + ret.data[0].idpessoa);
      this.listar();
      this.novo = {};
    });
  };
});