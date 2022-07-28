import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get<any>('emp')
  }

  postEmployees(data:any) {
    return this.http.post<any>('emp',data)
  }

  getEmployeesById(id:any){
    return this.http.get<any>(`emp/${id}`)
  }

  putEmployees(id:any,data:any){
    return this.http.put<any>(`emp/${id}`,data)
  }

  deleteEmployeesById(id:any){
    return this.http.delete<any>(`emp/${id}`)
  }
}
