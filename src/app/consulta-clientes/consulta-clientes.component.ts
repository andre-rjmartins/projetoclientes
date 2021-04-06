import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css']
})
export class ConsultaClientesComponent implements OnInit {

  //atributos
  listagemClientes = []; //array vazio
  cliente = {
    idCliente : 0,
    nome : '',
    email : '',
    cpf : ''
  };

  mensagem_exclusao:string;
  mensagem_edicao:string;

  constructor(private httpClient:HttpClient) { }

  //função executada quando o componente é renderizado
  ngOnInit(): void {
    this.consultarClientes();
  }

  consultarClientes() : void {

    this.httpClient.get(environment.apiUrl + "/clientes")
      .subscribe(
        (data:any[]) => {
          this.listagemClientes = data;
        },
        (e) => {
          console.log(e);
        }
      );

  }

  obterCliente(idCliente) : void {

    this.mensagem_exclusao = '';
    this.mensagem_edicao = '';

    this.httpClient.get(environment.apiUrl + "/clientes/" + idCliente)
      .subscribe(
        (data:any) => {
          this.cliente = data;
        },
        (e) => {
          console.log(e);
        }
      );

  }

  excluirCliente(idCliente) : void {

    this.httpClient.delete(environment.apiUrl + "/clientes/" + idCliente)
      .subscribe(
        (data:any) => {
          this.mensagem_exclusao = data.mensagem;
          this.consultarClientes();
        },
        (e) => {
          console.log(e);
        }
      );

  }

  atualizarCliente(formEdicao) : void {
    
    this.httpClient.put(environment.apiUrl + "/clientes", formEdicao.form.value)
      .subscribe(
        (data:any) => {
          this.mensagem_edicao = data.mensagem;
          this.consultarClientes();
        },
        (e) => {
          console.log(e);
        }
      );

  }

}
