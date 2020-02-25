import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Contact";
  showModal: boolean;

  constructor(private router: Router) {}
  show() {
    this.showModal = true; // Show-Hide Modal Check
  }
  addcontact() {
    this.router.navigate(["/addcontact"]);
  }
}
