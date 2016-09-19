import { Component } from '@angular/core';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives :[DiretivaNgifComponent]
})
export class AppComponent {
  title = 'app works!';
  checkEvent(event, id){

  }
}
