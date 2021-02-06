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
      text: 'I really want everyone to be happy!',
      id: 1
    },
    {
      title: 'Want to live forever',
      text: 'I want to see how human race will meet another race',
      id: 2
    }
  ];

  addNewPost(post: Post): void {
    this.posts.unshift(post);
  }
}
