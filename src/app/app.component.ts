import { Component } from '@angular/core';

//Building block
//We have the component info
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//This is where we have the properties/methods for this component
//Also we have the logic for this component
export class AppComponent {
  title = 'ng6';
}
