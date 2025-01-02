import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-task',
  templateUrl: './data-binding-task.component.html',
  styleUrls: ['./data-binding-task.component.css'],
})
export class DataBindingTaskComponent {
  userName: string = '';
  isDisableName: boolean = false;
  constructor() {}

  ngOnInit() {}
  addUserName() {}

  userNameAdd(event: Event) {
    if (this.userName === '') {
      this.isDisableName = true;
    }
    this.isDisableName = false;
  }

  Reset() {
    this.userName = '';
  }
}
