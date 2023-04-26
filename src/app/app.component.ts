import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-test-project';

  public number = 0;

  someSimpleFunction() {
    this.number = this.number + 1;
    console.log(this.number);
  }
}
