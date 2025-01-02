import { Component } from '@angular/core';

@Component({
  selector: 'app-diretive-practice',
  templateUrl: './diretive-practice.component.html',
  styleUrls: ['./diretive-practice.component.css'],
})
export class DiretivePracticeComponent {
  isSecretTxt = true;
  logValue: any = [];

  toggleLogValue() {
    this.isSecretTxt = !this.isSecretTxt;
    this.logValue.push(this.logValue.length + 1);
    console.log(this.logValue);
  }
}
