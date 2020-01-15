import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service : EmployeeService,private toast : ToastrService) { }

  
  ngOnInit() {
    this.service.refreshList();
  }

  updateEmp(emp: Employee){
    this.service.formData = Object.assign({},emp);
  }

  onDelete(id: number){
    this.service.deleteEmployee(id).subscribe(res => {
      this.service.refreshList();
      this.toast.warning('Delete Successfully','EMP Register');
    });
  }
}
