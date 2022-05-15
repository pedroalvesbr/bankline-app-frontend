import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//mude para sua aplicação - depois vamos mudar para a qual esta no Heroku
const baseUrl = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
//aqui que vai apontar para a url da sua API para fazer o GET do Http
export class MovimentacaoService {
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
  //get pelo id da Conta
  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }
  //aqui vai add na sua API via POST do http
  create(movimentacao:any): Observable<any>{
    return this.http.post(`${baseUrl}/movimentacoes`, movimentacao);
  }

}
