import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { FormUtils } from "../shared/form.utils";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";
import { User } from "../shared/user.model";
import * as $ from 'jquery';

@Component({
  selector: 'testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})

export class TestesComponent {
  public form: FormGroup;

  public constructor(private formBuilder: FormBuilder) {
    this.setupForm();
  }

  public setupForm() {
    this.form = this.formBuilder.group({
      dataInicial: [null, [Validators.required, this.dataInicialValidator ]],
      dataFinal: [null, [Validators.required, this.dataInicialValidator ]],
    }, { validator: this.dateVerify })
  }

  public dataInicialValidator(control: AbstractControl) {
    if ( (control.value > '3000-01-01') || (control.value < '1900-01-01') ) {
      return { errorDate: true };
    }
    return null;
  }

  public dateVerify(form: FormGroup){
    if( (form.get('dataInicial').value) > (form.get('dataFinal').value) ) {
      form.get('dataFinal').setErrors({ 'mismatch': true });
    }
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
  showLista = [];
  mostrar = [];
  public clicado(id, index) {
  
    if(this.mostrar.indexOf(index) == -1){
      this.mostrar.push(index);
      this.listaCidades = [];
      for (let i of this.cidades) {
        if (i.idE == id) { 
          this.listaCidades.push(i);
        }
      }
      //console.log(this.listaCidades);
      this.showLista[index] = this.listaCidades;
      console.log(this.showLista);
      $(`#seta${index}`).removeClass('fa-chevron-down').addClass('fa-chevron-up');

    } else {
      this.mostrar.splice(this.mostrar.indexOf(index), 1)
      this.showLista[index] =  [];
      $(`#seta${index}`).removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }

  }



}