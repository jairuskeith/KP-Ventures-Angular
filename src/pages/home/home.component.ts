import {Component, inject} from '@angular/core';
import { MatCheckbox } from "@angular/material/checkbox";
import {NgForOf, NgIf} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAnchor, MatButton } from "@angular/material/button";
import { MatDivider } from "@angular/material/divider";
import { CheckBox, CheckBoxSection, checkBoxSections } from "../checkBoxSections";
import { MatFormField } from "@angular/material/form-field";
import { MatDialog } from "@angular/material/dialog";
import { MatInput, MatLabel } from "@angular/material/input";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCheckbox,
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    MatButton,
    MatAnchor,
    MatDivider,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly dialog: MatDialog = inject(MatDialog);
  protected checkBoxSections: CheckBoxSection[] = checkBoxSections;

  protected update(checkBox: any, index: number = 0): void {


    const result = this.checkBoxSections[2].checkBoxes[11];
    result.checked = !result.checked;
    console.log(checkBox);
    console.log(result);
  }

  protected onSubmit(): void {
    alert('Submitted!');
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open("<div></div>", {
  //     // data: {name: this.name(), animal: this.animal()},
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     if (result !== undefined) {
  //       this.animal.set(result);
  //     }
  //   });
  // }
}
