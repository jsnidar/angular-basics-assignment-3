import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: boolean = true;
  logs = [];

  toggleShow(){
    this.logs.push(this.logs.length + 1)
    this.showParagraph = !this.showParagraph
  }
  
}
