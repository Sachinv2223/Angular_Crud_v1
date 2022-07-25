import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeServiceService, private router:Router,
    private toast:ToastrService ) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe((res:any) => {
      console.log({res});
      this.employeeArray = res.item;
    })
  }

  employeeArray:any = []

  goToCreate() {
    this.router.navigate(['/create'])
  }

  goToEdit(id:any) {
    this.router.navigate([`/edit/${id}`])
  }

  deleteRecord(id:any){
    if(confirm('Are you sure you want to delete this ?')) {
      this.empService.deleteEmployeesById(id).subscribe((res:any) => {
        console.log({res});
        if(res.success === 1) {
          this.toast.success(<any>res.message,'SUCCESS');
          // window.location.reload();
          
          //for updating the table again
          setTimeout(() => {
            this.ngOnInit();
          }, 100); 

        }
      })
    }
  }

}
