import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
              private toast : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      ID: null,
      FullName: '',
      EMPCode: '',
      Position: '',
      Mobile: ''
    }
  }

  onSubmit(form: NgForm){
    if(form.value.ID == null){
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }   
  }

  insertRecord(form: NgForm){
    this.service.postEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.toast.success('Inserted successfully !','EMP Register');
      this.service.refreshList();   
    });
  }

  updateRecord(form: NgForm){
    this.service.putEmployee(form.value).subscribe(res => {
      this.resetForm(form);
      this.toast.success('Update successfully !','EMP Register');
      this.service.refreshList();
    }); 
  }
}
