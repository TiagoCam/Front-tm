import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Agendados } from './model/agendados';
import { AgendasService } from '../services/agendas.service';

@Component({
  selector: 'app-agendados',
  templateUrl: './agendados.component.html',
  styleUrls: ['./agendados.component.css']
})
export class AgendadosComponent implements OnInit {
  // contaOrigem: number;
  // contaDestino: number;
  // valor: number;
  // dtTrans: string;
  // dtAgenda: string;
  agendados$: Observable<Agendados[]>;
  displayedColumns = ['contaOrigem','contaDestino','valor','dtTrans','dtAgenda'];

  //agendasService: AgendasService;

  constructor(private agendasService: AgendasService){
    //this.agendasService = new AgendasService();
    // this.agendados = this.agendasService.list();
    this.agendados$ = this.agendasService.list();
  }
  ngOnInit(): void{

  }
}
