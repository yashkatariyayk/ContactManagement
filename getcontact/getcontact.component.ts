import { ContactPipe } from "./contact.pipe";
import { ContactService } from "./../contact.service";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import Contact from "../addcontact/contact";

@Component({
  selector: "app-getcontact",
  templateUrl: "./getcontact.component.html",
  styleUrls: ["./getcontact.component.scss"]
})
export class GetcontactComponent implements OnInit {
  [x: string]: any;
  Contacts: Contact[] = [];
  favoriteContacts: Contact[] = [];
  searchname: string = "";
  data: any;
  public isFavorite: boolean = false;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    this.contactService.getContact().subscribe((data: Contact[]) => {
      this.Contacts = data;
      let favList = [];
      data.forEach(contact => {
        if (contact.isFavorite) {
          favList.push(contact);
        }
      });
      this.favoriteContacts = favList;
    });
  }

  //Delete Products
  deleteContact(cid) {
    this.contactService.deleteContact(cid).subscribe(newData => {
      this.data = newData;
      console.log(this.data);
      console.log("Deleted");
      this.getContact();
    });
  }

  addasfavorite(contact) {
    const isFavorite = !contact.isFavorite;
    this.contactService
      .addasfavorite(contact._id, isFavorite)
      .subscribe((data: Contact) => {
        this.getContact();

        console.log(data);
        this.togglecolor(contact);
      });
  }

  togglecolor(contact) {
    contact.isFavorite = !contact.isFavorite;
  }
}
