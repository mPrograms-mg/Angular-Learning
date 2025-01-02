import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './Alerts/warning/warning.component';
import { SuccessComponent } from './Alerts/success/success.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingTaskComponent } from './data-binding-task/data-binding-task.component';
import { DirectivesComponent } from './directives/directives.component';
import { DiretivePracticeComponent } from './diretive-practice/diretive-practice.component';
import { BasicHighlightDirective } from './directive/basic-hight.directive';
import { BetterDirectiveDirective } from './directivesFolder/better-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
    DataBindingComponent,
    DataBindingTaskComponent,
    DirectivesComponent,
    DiretivePracticeComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
