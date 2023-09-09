// import { Agenda } from './../model/agenda';
import { Injectable } from '@angular/core';
import { Agendados } from '../agendados/model/agendados';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  private readonly API = "/assets/agendas.json";

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Agendados[]>(this.API)
    .pipe(
      delay(1000),
      tap(agenda => console.log(agenda))
    );

  }
}
