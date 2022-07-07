import { Component } from "@angular/core";

@Component({
  selector: "app-root",

  // templateUrl: "./app.component.html",
  template: `<div>
    <h1>
      {{ component }}
    </h1>
    <p>{{ recieveTestData }}</p>

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
  recieveTestArr(r: { name: string; tech: string }) {}
}
