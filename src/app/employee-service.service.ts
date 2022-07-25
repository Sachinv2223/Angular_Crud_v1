import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get<any>('http://localhost:3000/emp')
  }

  postEmployees(data:any) {
    return this.http.post<any>('http://localhost:3000/emp',data)
  }

  getEmployeesById(id:any){
    return this.http.get<any>(`http://localhost:3000/emp/${id}`)
  }

  putEmployees(id:any,data:any){
    return this.http.put<any>(`http://localhost:3000/emp/${id}`,data)
  }

  deleteEmployeesById(id:any){
    return this.http.delete<any>(`http://localhost:3000/emp/${id}`)
  }
}
