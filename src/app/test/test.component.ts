import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ViewChild
} from "@angular/core";

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

    <br /><br />

    <h3>Local Reference and View Child</h3>
    <label>Enter Name : </label>
    <input type="text" class="form-control" #nameInput />
    <br />
    <br />
    <label>Enter Tech : </label>
    <input type="text" class="form-control" #techInput />
    <br />
    <br />
    <button (click)="sendName(nameInput)">Send Data to App</button>
  `,

  styleUrls: ["./test.component.css"],
  encapsulation: ViewEncapsulation.None // APPLIES STYLING TO APP COMPONENT IF STYLE TAGS IS IN TEST COMPONENT --> OVERRIDE
})
export class TestComponent {
  // RECIEVE FROM APP COMPONENT
  @Input("recieveAppData") public Data;
  @Input("recieveAppArr") datArr: { name: string; tech: string };

  // SEND TO APP COMPONENT
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

  // LOCAL REFERENCE AND VIEW CHILD :

  @ViewChild("techInput", { static: true }) y;

  sendName(x: HTMLInputElement) {
    this.sendTestArr.emit({
      name: x.value,
      tech: this.y.nativeElement.value
    });
  }
}
