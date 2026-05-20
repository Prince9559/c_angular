import { Component } from '@angular/core';

@Component({
  selector: 'app-input-component',
  imports: [],
  templateUrl: './input-component.html',
  styleUrl: './input-component.css',
})
export class InputComponent {

  Add() 
  {
    let a=Number((document.getElementById("t") as HTMLInputElement).value);
    let b=Number((document.getElementById("t1") as HTMLInputElement).value);
    (document.getElementById("result") as HTMLInputElement).value=String(a+b);
    
  }

  Sub() 
  {
    let a = Number((document.getElementById("t") as HTMLInputElement).value);
    let b = Number((document.getElementById("t1") as HTMLInputElement).value);
    (document.getElementById("result") as HTMLInputElement).value =String(a - b);
  
  }

}