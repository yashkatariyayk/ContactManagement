import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
@Injectable({
  providedIn: "root"
})
export class ContactService {
  isFavorite: boolean = false;

  uri = "http://localhost:3000/contact";

  constructor(private http: HttpClient) {}

  addContact(FirstName, LastName, Email, Phone, Password, ConfirmPassword) {
    const obj = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Phone: Phone,
      Password: Password,
      ConfirmPassword: ConfirmPassword
    };
    return this.http
      .post(`${this.uri}/addcontact`, obj)
      .subscribe(res => console.log("Done"));
  }

  // To Get The List Of Contact

  getContact() {
    return this.http.get(`${this.uri}`);
  }

  // To Get Contact Details For Single Record Using Id
  editContact(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateContact(FirstName, LastName, Email, Phone, id) {
    const obj = {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Phone: Phone
    };
    this.http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log("Done"));
  }

  // To Delete Any Contact
  deleteContact(cid) {
    return this.http.get(`${this.uri}/delete/${cid}`);
  }

  getfavoritelist() {
    return this.http.get(`${this.uri}/favorite`);
  }

  addasfavorite(cid, isFavorite) {
    const obj = {
      isFavorite: isFavorite
    };
    return this.http.put(`${this.uri}/favorite/${cid}`, obj);
  }
}
