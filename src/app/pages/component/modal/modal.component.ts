import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {


  constructor(public dialogRef: MatDialogRef<ModalComponent>, private fb: FormBuilder) {


   }

  cerrarModal() {
    this.dialogRef.close();
  }

onSubmit() {

}


}
