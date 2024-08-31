import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor( private http:HttpClient) { }

  getData()
  {
    return this.http.get("https://localhost:7193/Customer/GetListCustomer?customerType=2")
  }
}
