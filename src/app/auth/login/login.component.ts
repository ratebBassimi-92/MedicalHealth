import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isDisable: boolean = false;
  @Input() messageParent: any;
  constructor(
    private toastr: ToastrService
  ) {

  }


  showToaster() {

    this.toastr.success("this toaster")

    this.isDisable = true;
  }
}
