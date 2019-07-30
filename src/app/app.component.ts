import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'abcatting';

  constructor() {
    this.setIdToAnonymUSer();
  }

  // create session for anonymous user for next identification by his user ID
  setIdToAnonymUSer() {
    if (!localStorage.getItem('user_id')) {
      const timestamp = new Date().getTime();
      localStorage.setItem('user_id', 'user_' + timestamp); // set user id to angular storage
      localStorage.setItem('voteCount', '0');
    }
  }
}
