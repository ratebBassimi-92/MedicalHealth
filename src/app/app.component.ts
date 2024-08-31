import { Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../app/services/employee.service'
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medical-health';
  @ViewChild(LoginComponent) viewData!: LoginComponent;
  myName: string = 'rateb'
  listEmp: any;
  ageEmployee: number = 5.34
  dateNow: Date = new Date('1992-07-22');
  viewageEmployee!: number
  calssSpecial = "special"
  isSpecial: boolean = true;
  sytlespecal1 = {
    'color': 'red',
    'font-style': 'italic',
    'font-size': '50px'
  }
  diagnosis: any[] = [
    {
      'name': 'r51',
      'diagnosisType': 'prinmry',
      'desc': 'r52 terte rtrrr'
    },
    {
      'name': 'z23',
      'diagnosisType': 'secondary',
      'desc': 'z23 terte rtrrr'
    },
    {
      'name': 'xs34',
      'diagnosisType': 'secondary',
      'desc': 'xs34 terte rtrrr'
    },
  ]

  constructor(private toastr: ToastrService,
    private embService: EmployeeService
  ) {
    this.isSpecial = this.ageEmployee >= 5 ? true : false;


    this.embService.getData().subscribe(
      resault => {
        this.listEmp = resault;
        console.log(this.listEmp.data)
      }
    )
  }
  outPutMasseage() {
    debugger;

    this.viewData.messageparent = "this from parant";
    this.toastr.success("done", 'Toastr fun!');
  }
  datachang() {
    this.viewageEmployee = this.ageEmployee;
  }
  reciveFromchild(value: string) {
    this.myName = value;
  }
}
