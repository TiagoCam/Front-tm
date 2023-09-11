import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { AgendasService } from '../services/agendas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit  {

  form = this.formBuilder.group( {
    contaOrigem: [''],
    contaDestino: [''],
    valor: [''],
    dtTransfer: [''],
    dtAgenda: [''],
    valorTaxa: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AgendasService,
    private snackBar: MatSnackBar,
    private location: Location) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.OnSuccess(), error => this.onError());

  }

  onCancel() {
    this.location.back();
  }

  private OnSuccess() {
    this.snackBar.open('Agendamento salvo com sucesso', '', { duration:3000 });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao agendar', '', { duration:3000 });
  }


}
