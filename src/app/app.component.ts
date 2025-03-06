import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
export class AppComponent {
  items = ['Apple', 'Banana', 'Cherry', 'Date'];
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDate = new Date();
  price = 12345.6789;
  message = 'Hello Angular World';
}


