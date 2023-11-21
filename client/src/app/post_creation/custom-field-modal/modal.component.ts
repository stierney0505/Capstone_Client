import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

export interface CustomFieldDialogData {
  type: string;
  fieldName: string;
}

@Component({
  selector: 'modal-dialog.component',
  templateUrl: 'modal-dialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSelectModule],
})
export class CustomFieldDialogue {
  constructor(
    public dialogRef: MatDialogRef<CustomFieldDialogue>,
    @Inject(MAT_DIALOG_DATA) public data: CustomFieldDialogData
  ) {}

  type: string = "None";
  fieldName: string = "Empty";

  onNoClick(): void {
    this.dialogRef.close();
  }
}