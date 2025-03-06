
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";
  receivedMessage = '';

  // Method to receive message from child
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
