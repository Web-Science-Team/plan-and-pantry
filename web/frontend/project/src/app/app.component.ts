import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6PT_cOkSYXRyLDvslxjtkspvaZRU6oIw",
  authDomain: "plan-and-pantry.firebaseapp.com",
  projectId: "plan-and-pantry",
  storageBucket: "plan-and-pantry.appspot.com",
  messagingSenderId: "686031410842",
  appId: "1:686031410842:web:d873c3a677b302a681b123"
};

const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
