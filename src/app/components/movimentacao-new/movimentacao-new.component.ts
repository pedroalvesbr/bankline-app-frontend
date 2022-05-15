import { Component, OnInit } from '@angular/core';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService} from 'src/app/services/movimentacao.service'

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})

export class MovimentacaoNewComponent implements OnInit {
  correntistas:any;
  correntistaSelecionado: any;

  datahora: any;
  valor: any;
  tipo: any;
  descricao: any;
  


  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
  ) { }


  ngOnInit(): void {
    this.exibirCorrentistas();
    
  }
  exibirCorrentistas(): void{
    this.correntistaService.list()
        .subscribe(
          data=>{
            this.correntistas = data;
            console.log(data);

          },
          error => {
            console.log(error)

          });
}
  save(): void{
    console.log(this.correntistaSelecionado)
    const movimentacao={
      valor: this.valor,
      descricao: this.descricao,
      tipo: this.tipo,
      idConta: this.correntistaSelecionado.id,
      datahora: this.datahora
    };
    console.log(movimentacao);
    this.movimentacaoService.create(movimentacao)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });

  }
  

}


