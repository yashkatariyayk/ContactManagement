import { EditcontactComponent } from "./editcontact/editcontact.component";
import { GetcontactComponent } from "./getcontact/getcontact.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddcontactComponent } from "./addcontact/addcontact.component";

const routes: Routes = [
  { path: "", redirectTo: "contact", pathMatch: "full" },
  { path: "add/contact", component: AddcontactComponent },
  { path: "contact", component: GetcontactComponent },
  { path: "edit/:id", component: EditcontactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
