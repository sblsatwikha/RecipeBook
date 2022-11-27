import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DishesServiceService {

  constructor(private httpClient: HttpClient) {}
  
  getDishes() {
    return  this.httpClient.get("https://3vg4p47spk.execute-api.us-east-1.amazonaws.com/getRecipelist");
  }

}