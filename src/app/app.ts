import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Mensagens {
  "id": number,
  "texto": string,
  "clienteId": number,
}

interface Cliente {
  id: number,
  nome: string,
  cnpj: string,
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  mensagens: Mensagens[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMensagens();
  }

  getMensagens(): void {
    this.http.get<Mensagens[]>(
      'http://ec2-54-233-219-14.sa-east-1.compute.amazonaws.com:3000/api/Mensagens'
    ).subscribe({
      next: (response) => {
        this.mensagens = response;
        console.log('Mensagens recebidas:', this.mensagens);
      },
      error: (err) => {
        console.error('Erro ao carregar mensagens:', err);
      }
    });
  }
}
