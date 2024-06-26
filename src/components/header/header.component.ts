import { Component } from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatMenuTrigger,
    MatMenu,
    MatIcon,
    MatIconButton,
    MatMenuItem,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
