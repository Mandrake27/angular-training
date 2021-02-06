import { Component } from '@angular/core';
import { Post } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Want everyone to be happy!',
      text: 'lorem10',
      id: 1
    },
    {
      title: 'Want to live forever',
      text: 'lorem10',
      id: 2
    }
  ];
}
