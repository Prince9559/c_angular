import { Component, signal } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button-component/button-component';
import { InputComponent } from './components/input-component/input-component';
import { RadioComponent } from './components/radio-component/radio-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('c_angular');
}
