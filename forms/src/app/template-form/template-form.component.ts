import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form: any){
   // console.log(form.value);

   // console.log(this.usuario);

   this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map((res: any) => res)).subscribe((dados: any) => console.log(dados));
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  varificaValidTouched(campo: any){
    return !campo.valid && campo.touched
  }

  aplicaCssErro(campo: any){
    return {
      'has-error' : this.varificaValidTouched(campo),
      'has-feedback' : this.varificaValidTouched(campo)
    }
  }

  consultaCep(cep: any, form:any){
    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)
      .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }

  populaDadosForm(dados: any,formulario: FormGroup) {

   formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
    }
  });
}

resetaDadosForm(formulario : any){
  formulario.form.patchValue({
    endereco: {
      rua: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
  }
  });
}
}
