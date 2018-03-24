import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emails = ['', 'naser@angular.io', 'templateFormat@angular.io', 'test@gm.com',
    '', 'form@uiux.bi'];

  model = new Data('Earth', this.emails[0], 'Angular Template Driven Forms');

  submitted = false;
  title = 'name';
  emailAddress = 'Email Address';
  text = 'Message';
  emailAddressRes = ''; titleRes = ''; textRes = '';
  onSubmit(result) {
    this.titleRes = result.name;
    this.emailAddressRes = result.myEmails;
    this.textRes = result.textMessage;
    this.submitted = true;
  }


}

export class Data {
  constructor(
    public name: string,
    public myEmails?: string,
    public textMessage?: string
  ) { }

}
