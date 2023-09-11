import { Observable, catchError, of } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Agendados } from './model/agendados';
import { AgendasService } from '../services/agendas.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-agendados',
  templateUrl: './agendados.component.html',
  styleUrls: ['./agendados.component.css']
})
export class AgendadosComponent implements OnInit {

  agendados$: Observable<Agendados[]>;
  displayedColumns = ['contaOrigem','contaDestino','valor','dataRegistro','dataTransfer','valorTaxa','actions'];



  constructor(
    private agendasService: AgendasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute

  ){

    this.agendados$ = this.agendasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar tabela.')
        return of([])
      })
    );
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


  ngOnInit(): void {
  }


  onAdd() {
    this.router.navigate(['/new'], {relativeTo: this.route});
  }

  onEdit(agendados: Agendados) {

  }
}
