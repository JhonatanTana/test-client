import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Mensagens } from './mensagens';
import { BrowserModule } from '@angular/platform-browser';

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
      '/api/mensagens'
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
