import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  ngIfDirective: boolean = true;
  ngStyleStatus: string = 'offline';
  

  constructor() {
    this.ngStyleStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getStyleStatus() {
    return this.ngStyleStatus;
  }

  getColorStyle() {
    return this.ngStyleStatus === 'online' ? 'green' : 'red';
  }

  hideShow() {
    this.ngIfDirective = !this.ngIfDirective;
  }
}
