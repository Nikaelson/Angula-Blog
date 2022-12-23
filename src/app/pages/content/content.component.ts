import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'repositoryFake/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  @Input()
  conteudoTitulo: string = ''
  @Input()
  conteudoImagem: string = ''
  @Input()
  conteudoConteudo: string = ''


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let idString = param.get('id') ?? '1';
      let Id = parseInt(idString) - 1;

      this.conteudoTitulo = dataFake[Id].titulo
      this.conteudoImagem = dataFake[Id].imagem
    })
  }

}
