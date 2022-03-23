import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
  ) { }

  cancelDialog(): void {
    this.dialogRef.close();
  }

  nomeDialog:string = ''
  sobrenomeDialog:string = ' '
  cpfDialog:string = ' '
  telDialog:string = ' '
  sexDialog:string = ' '
  estadoDialog:string = ' '
  enderecoDialog:string = ' '
  complementoDialog:string = ' '
  emailDialog:string = ' '
  usuarioDialog:string = ' '

}
