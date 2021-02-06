import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello my friends!';

  inputText = '';

  changeText(e) {
    this.inputText = e.target.value;
  }
}
