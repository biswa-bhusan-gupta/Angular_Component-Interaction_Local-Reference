import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-test",

  // templateUrl: "./test.component.html",
  template: `
    <h2>Test Component</h2>

    <p>{{ Data }}</p>
    <p>Array Details from App to Test : {{ datArr.name }} {{ datArr.tech }}</p>

    <button (click)="info()">Send Data Test to App</button>
    <br /><br />
    <button (click)="infoArr()">Send Data Array Test to App</button>
  `,

  styleUrls: ["./test.component.css"]
})
export class TestComponent {
  @Input("recieveAppData") public Data;
  @Input("recieveAppArr") datArr: { name: string; tech: string };

  @Output() public sendTestData = new EventEmitter();
  info() {
    this.sendTestData.emit("From Test to App");
  }

  name = "Yash";
  tech = "IT";
  @Output() sendTestArr = new EventEmitter<{ name: string; tech: string }>();
  infoArr() {
    this.sendTestArr.emit({ name: this.name, tech: this.tech });
  }
}
