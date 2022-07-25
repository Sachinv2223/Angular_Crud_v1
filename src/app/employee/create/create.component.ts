import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private empService:EmployeeServiceService, private router:Router, 
    private toast:ToastrService, private activRoute:ActivatedRoute) { }

  data = {
      firstName: '',
      lastName: '',
      age: null
  }
  
  id:any;

  ngOnInit() {
    this.id = this.activRoute.snapshot.paramMap.get('id');
    console.log(`Id is ${this.id}`);
    if(this.id) {
      this.empService.getEmployeesById(this.id).subscribe((res:any) => {
        console.log(res);
        this.data = res.item;
      })
    }

  }

  onSubmit() {

    if(this.id) {
      this.empService.putEmployees(this.id,this.data).subscribe((res:any) => {
        if(res.success === 1){
          this.toast.success(<any>res.message,'SUCCESS')
          setTimeout(() => {
            this.router.navigate(['/'])
          }, 500); 
        }
      })
    }
    
    else {
      this.empService.postEmployees(this.data).subscribe((res:any) => {
        console.log(res);
        if(res.success === 1){
          this.toast.success(<any>res.message,'SUCCESS')
          setTimeout(() => {
            this.router.navigate(['/'])
          }, 500); 
        }
      })
    }

  }


}
