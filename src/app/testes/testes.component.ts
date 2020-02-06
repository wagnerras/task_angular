import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { FormUtils } from "../shared/form.utils";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";
import { User } from "../shared/user.model";

@Component({
  selector: 'testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})

export class TestesComponent {


  public constructor() {

  }

  public estados = [
    { id: 1, nome: 'RJ' },
    { id: 2, nome: 'SP' },
    { id: 3, nome: 'MG' }
  ]


  public cidades = [
    { id: 1, nome: 'Rio de Janeiro', idE: 1 },
    { id: 2, nome: 'Niteroi', idE: 1},
    { id: 3, nome: 'Sao Paulo', idE: 2 },
    { id: 4, nome: 'Belo Horizonte', idE: 3},
    { id: 5, nome: 'Petropolis', idE: 1},
    { id: 6, nome: 'Juiz de Fora', idE: 3},
    { id: 7, nome: 'Santos', idE: 2},
    { id: 8, nome: 'Uberaba', idE: 2},
    { id: 9, nome: 'Cabo Frio', idE: 1},
    { id: 10, nome: 'Felixlandia', idE: 3}
  ]

  listaCidades = [];
  show = [];

  public clicado(id, index) {
    this.listaCidades = [];

    for (let i of this.cidades) {
      if (i.idE == id) { 
        this.listaCidades.push(i);
      }
    }
    console.log(this.listaCidades);
    this.show[index] = this.listaCidades;
    console.log(this.show);
  }



}