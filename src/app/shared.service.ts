import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  getCatList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/category/');
  }

  addCategory(val:any){
    return this.http.post(this.APIUrl + '/category/',val);
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl + '/category/',val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.APIUrl + '/category/'+val);
  }

  getOffList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/offer/');
  }

  addOffer(val:any){
    return this.http.post(this.APIUrl + '/offer/',val);
  }

  updateOffer(val:any){
    return this.http.put(this.APIUrl + '/offer/',val);
  }

  deleteOffer(val:any){
    return this.http.delete(this.APIUrl + '/offer/'+val);
  }

  getCategoryNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/category/');
  }
}
