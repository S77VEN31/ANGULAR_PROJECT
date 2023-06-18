import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  number: number = 10;
  state: boolean = false;
  message: string = 'EL servidor esta apagado';
  onUpdateServerName(event: Event) {
    this.changeState((<HTMLInputElement>event.target).value)
  }
  getState(state=this.state) {
    return state;
  };
  changeState(message: string ='EL servidor esta encendido') {
    this.message = message;
  };
  ngOnInit() {
    setTimeout(() => {
      this.state = true;
    }, 2000);
  }
}
