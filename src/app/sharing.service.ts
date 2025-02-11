import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor(private http : HttpClient) {}
  private url = 'http://127.0.0.1:3000/';

  
  CreateNewHero( hero:any ){
    return this.http.post( this.url + 'hero/ajout' , hero);   
  }
  showAllHeros(){
    return this.http.get( this.url + 'hero/all')
  }
  

}
