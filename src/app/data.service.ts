//On my dataservice file, I will need to import httpclient. This will allow us to hit Apis
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

//On my data service class: 
//I will need to methods to get Api responses
export class DataService {

  //Get an instace of this HttpClient
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
