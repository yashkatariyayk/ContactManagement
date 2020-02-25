import { ContactService } from "./contact.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddcontactComponent } from "./addcontact/addcontact.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GetcontactComponent } from "./getcontact/getcontact.component";
import { ContactPipe } from "./getcontact/contact.pipe";
import { EditcontactComponent } from "./editcontact/editcontact.component";

import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent,
    AddcontactComponent,
    GetcontactComponent,
    ContactPipe,
    EditcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
