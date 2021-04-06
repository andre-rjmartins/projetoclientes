import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  //variáveis da classe
  mensagem : string;

  //declarar um atributo para a classe HttpClient
  //este atributo já será inicializado pelo Angular
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  //função executada no evento SUBMIT do formulário
  cadastrarCliente(formCadastro) : void {
    
    //realizando uma chamada post para a API do Java
    //PROMISSE -> retorno obtido após a realização de uma chamada HTTP (API)
    this.httpClient.post(environment.apiUrl + "/clientes", formCadastro.form.value)
      .subscribe( //capturando o PROMISSE retornado pela API
        (data:any) => { //capturando a resposta de sucesso da api
          this.mensagem = data.mensagem;
          formCadastro.form.reset();
        },
        (e) => { //capturando a resposta de erro da api
          console.log(e);
        }
      );
    
  }

}
