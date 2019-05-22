import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Summation';
  constructor() { 
  }
  ConvertToInt(val){
    return parseInt(val);
  }
   
  ngOnInit() {
    }
}
