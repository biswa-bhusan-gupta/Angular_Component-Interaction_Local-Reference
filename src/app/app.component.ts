import { Component } from "@angular/core";

@Component({
  selector: "app-root",

  // templateUrl: "./app.component.html",
  template: `<div>
    <h1>
      {{ component }}
    </h1>
    <p>{{ recieveTestData }}</p>
    <p *ngFor="let i of arrTest">
      Array Details from Test to App : {{ i.name }} {{ i.tech }}
    </p>
    <!-- TEST COMPONENT = APP COMPONENT -->
    <app-test
      *ngFor="let i of sendAppArr"
      [recieveAppArr]="i"
      [recieveAppData]="sendAppData"
      (sendTestData)="recieveTestData = $event"
      (sendTestArr)="recieveTestArr($event)"
    ></app-test>
  </div> `,

  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  component = "App Component";
  sendAppData = "From App to Test"; // DECLARING AS PROPERTY TO SEND DATA FROM APP COMPONENT TO CHILD COMPONENT
  // THEN BIND IT TO CHILD SELECTOR
  sendAppArr = [{ name: "Biswa", tech: "CSE" }];

  recieveAppData = "";

  arrTest = [{ name: "Tushar", tech: "ETC" }];
  recieveTestArr(det: { name: string; tech: string }) {
    this.arrTest.push({
      name: det.name,
      tech: det.tech
    });
  }
}
