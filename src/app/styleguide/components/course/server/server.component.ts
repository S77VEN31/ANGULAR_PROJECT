// Angular imports
import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent {
  /*
  constructor() { 
    interface texts {
      REGISTER_SERVER: string
      SERVER_NAME: string
    }
    let {REGISTER_SERVER,SERVER_NAME}: texts = this.data;

    console.log(REGISTER_SERVER,SERVER_NAME);
  } 
  */
  data = {
    DEFAULT_SERVER_NAME: "Nombre del servidor",
    REGISTER_SERVER: "Registrar servidor",
    PLACEHOLDER: "Ingrese el servidor"
  };

  // Enumerables
  DEFAULT_SERVER_NAME: string = this.data.DEFAULT_SERVER_NAME;
  REGISTER_SERVER: string = this.data.REGISTER_SERVER;
  PLACEHOLDER: string = this.data.PLACEHOLDER;
  // Variables
  serverName = "";
  servers: string[] = ["Costa Rica", "Costa Rica"];

  registerServerName() {
    this.servers.push(this.serverName);
    this.serverName = "";
  }

  getButtonClass(): string {
    return this.serverName ? "button1" : "button2";
  }
}
