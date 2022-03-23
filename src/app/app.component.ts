import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio_06_rf';

  constructor (
    private fb:FormBuilder,
    public dialog: MatDialog,
  ){ }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3) , Validators.maxLength(10)]),
    sobrenome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cpf: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    tel: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    sex: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required, Validators.minLength(2)]),
    endereco: new FormControl('', [Validators.required, Validators.minLength(4)]),
    complemento: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
    usuario: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmeSenha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  
  
  validadorDeSenha():void {
  
    if(this.cadastroForm.value.senha === this.cadastroForm.value.confirmeSenha){
    console.log("As senhas conferem, cadastro efetuado")
    }else{
    alert('Cadastro inválido. Tente novamente. (Senhas não coincidem)')
    }
    
    }

    submit():void {
      console.log(`Nome = ${this.cadastroForm.controls['nome'].value}`)
      console.log(`Sobrenome = ${this.cadastroForm.controls['sobrenome'].value}`)
      console.log(`CPF = ${this.cadastroForm.controls['cpf'].value}`)
      console.log(`Contato = ${this.cadastroForm.controls['tel'].value}`)
      console.log(`Sexo = ${this.cadastroForm.controls['sex'].value}`)
      console.log(`Estado = ${this.cadastroForm.controls['estado'].value}`)
      console.log(`Endereço = ${this.cadastroForm.controls['endereco'].value}`)
      console.log(`Complemento = ${this.cadastroForm.controls['complemento'].value}`)
      console.log(`Email = ${this.cadastroForm.controls['email'].value}`)
      console.log(`Usuario = ${this.cadastroForm.controls['usuario'].value}`)
    
      let ref = this.dialog.open(DialogComponent)
      ref.componentInstance.nomeDialog = this.cadastroForm.value.nome
      ref.componentInstance.sobrenomeDialog = this.cadastroForm.value.sobrenome
      ref.componentInstance.cpfDialog = this.cadastroForm.value.cpf
      ref.componentInstance.telDialog = this.cadastroForm.value.tel
      ref.componentInstance.sexDialog = this.cadastroForm.value.sex
      ref.componentInstance.estadoDialog = this.cadastroForm.value.estado
      ref.componentInstance.enderecoDialog = this.cadastroForm.value.endereco
      ref.componentInstance.complementoDialog = this.cadastroForm.value.complemento
      ref.componentInstance.emailDialog = this.cadastroForm.value.email
      ref.componentInstance.usuarioDialog = this.cadastroForm.value.usuario
      
    }


}


