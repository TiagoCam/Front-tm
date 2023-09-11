import { Injectable } from '@angular/core';
import { Agendados } from '../agendados/model/agendados';
import { HttpClient } from '@angular/common/http';
import { tap, delay, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  private readonly API = '/api/agendas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Agendados[]>(this.API)
    .pipe(
      delay(500),
      tap(agenda => console.log(agenda))
    );

  }

  save(record: Partial<Agendados>) {
    return this.httpClient.post<Agendados>(this.API, record).pipe(first());
  }
}
