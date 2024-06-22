import { Component, computed, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatCheckbox } from "@angular/material/checkbox";
import { HeaderComponent } from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {HomeComponent} from "../pages/home/home.component";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPSPz15GTx0u-BlHHZdT4zWmpP_jpExtk",
  authDomain: "onboarding-ec957.firebaseapp.com",
  projectId: "onboarding-ec957",
  storageBucket: "onboarding-ec957.appspot.com",
  messagingSenderId: "777491874221",
  appId: "1:777491874221:web:e32a50948bdc2acfd4e124",
  measurementId: "G-B5WWT9WS5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// @ts-ignore
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCheckbox, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KP-venture-Angular';


  // readonly task = signal<Task>({
  //   name: 'Parent task',
  //   completed: false,
  //   subtasks: [
  //     {name: 'Child task 1', completed: false},
  //     {name: 'Child task 2', completed: false},
  //     {name: 'Child task 3', completed: false},
  //   ],
  // });
  //
  // readonly partiallyComplete = computed(() => {
  //   const task = this.task();
  //   if (!task.subtasks) {
  //     return false;
  //   }
  //   return task.subtasks.some((t: { completed: any; }) => t.completed) && !task.subtasks.every((t: { completed: boolean; }) => t.completed);
  // });
  //
  // update(completed: boolean, index?: number) {
  //   this.task.update(task => {
  //     if (index === undefined) {
  //       task.completed = completed;
  //       task.subtasks?.forEach((t: { completed: boolean; }) => (t.completed = completed));
  //     } else {
  //       task.subtasks![index].completed = completed;
  //       task.completed = task.subtasks?.every((t: { completed: boolean; }) => t.completed) ?? true;
  //     }
  //     return {...task};
  //   });
  // }
}

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}
