import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownService } from './../shared/services/dropdown.service';
import { EstadoBr } from './../shared/models/estado-br';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Observable, pipe, of } from 'rxjs';
import { FormValidations } from '../shared/form-validation';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: any |FormGroup;
  /*estado!:EstadoBr[];*/
  estado!: Observable<EstadoBr[]>;
  cargos!: any[];
  tecnologias!: any[];
  newsletterOp!: any[];
  termos!: any[];

  frameworks = ['Angular', 'React', 'Vue', 'Sensha'];

  @Input() mostrarErro!: boolean;
  @Input() msgErro!: string;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService) { }

  ngOnInit(): void {

    this.estado = this.dropdownService.getEstadosBr();

    this.cargos = this.dropdownService.getCargos();

    this.tecnologias = this.dropdownService.getTecnologias();

    this.newsletterOp = this.dropdownService.getNewsletter();

    /*this.dropdownService.getEstadosBr()
      .subscribe((dados:any )=> {this.estado = dados; console.log(dados);});*/

    /*
    this.formulario = new FormGroup({
      nome: new FormControl('nome'),
      email: new FormControl('email.com')
    })*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereço: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [null],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    });

  }

  onSubmit() {
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: any) => v ? this.frameworks[i] : null)
        .filter((v: any) => v !== null)
    });

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify({})).subscribe((dados: any) => {
          console.log(dados);
          // - Resetar Form - \\
          //this.formulario.reset();
          //this.resetar();
        },
          (erro: any) => alert('Erro'));
    } else {
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();

  }

  verificaValidTouched(campo: string): boolean {
    return !this.formulario.get(campo)!.valid && (this.formulario.get(campo)!.touched || this.formulario.get(campo)!.dirty)
  }

  verificEmailOnvalido() {
    let capoEmail = this.formulario.get('email');
    if (capoEmail!.errors) {
      return capoEmail!.errors['email'] && capoEmail!.touched
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }


  consultaCep() {

    const cep = this.formulario.get('endereço.cep')!.value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep)!.subscribe(dados => this.populaDadosForm(dados));
    }
  }


  populaDadosForm(dados: any | object) {
    // this.formulario.setValue({});

    this.formulario.patchValue({
      endereço: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
    this.formulario.get('nome')!.setValue('Edivonaldo Marques Francisco');
    this.formulario.get('email')!.setValue('edivonaldomarques@hotmail.com');
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')!.setValue(cargo);
  }

  compararCargos(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias')!.setValue(['java', 'javascript', 'php']);
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

}
