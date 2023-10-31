import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-diretivas',
  templateUrl: './exemplo-diretivas.component.html',
  styleUrls: ['./exemplo-diretivas.component.css'],
})
export class ExemploDiretivasComponent implements OnInit {
  listaPessoas: any = [
    { id: 1, nome: 'José da Silva', cidade: 'Votorantim' },
    { id: 2, nome: 'Maria das Dores', cidade: 'Sorocaba' },
    { id: 3, nome: 'Rafael Moreno', cidade: 'Votorantim' },
    { id: 4, nome: 'Patrícia Ferreira', cidade: 'Votorantim' },
    { id: 5, nome: 'Gisele Moraes', cidade: 'Sorocaba' },
  ];

  mostraTabela: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
