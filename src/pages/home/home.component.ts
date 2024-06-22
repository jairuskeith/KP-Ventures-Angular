import { Component } from '@angular/core';
import {MatCheckbox} from "@angular/material/checkbox";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCheckbox,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  checkboxes: CheckBox[] = [
    { name: "Checkbox 1", checked: false },
    { name: "Checkbox 2", checked: false },
    { name: "Checkbox 3", checked: false },
    { name: "Checkbox 4", checked: false },
    { name: "Checkbox 5", checked: false },
    { name: "Checkbox 6", checked: false },
    { name: "Checkbox 7", checked: false },
    { name: "Checkbox 8", checked: false },
    { name: "Checkbox 9", checked: false },
    { name: "Checkbox 10", checked: false },
  ];

  // public update(event: any, index: number = 0): void {
  //   console.log(event);
  // }

  public update(checked: boolean, index: number = 0): void {
    console.log(checked);
  }
}

interface CheckBox {
  name: string;
  checked: boolean;
}
