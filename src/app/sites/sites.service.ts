import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SitesService {
  base_url = "https://site-details-server.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getDomains() {
    return this.http.get(`${this.base_url}domains`);
  }

  addDomain(reqObj) {
    return this.http.post(`${this.base_url}domains`, reqObj);
  }
}
