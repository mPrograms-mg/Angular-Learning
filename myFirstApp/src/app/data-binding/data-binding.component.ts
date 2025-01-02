import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  name: string = 'This is String Interpolation';
  num: number = 12;
  allowProperty: boolean = false;
  eventBindingTxt: string = 'This event binding Text  is not create';
  eventName: any = '';

  constructor() {
    setTimeout(() => {
      this.allowProperty = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateEventBind() {
    this.eventBindingTxt = 'This event binding Text is create';
  }

  updateEvent(event: Event) {
    this.eventName = (<HTMLInputElement>event.target).value;
  }
}
