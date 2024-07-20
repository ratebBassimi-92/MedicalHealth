import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medical-health';
  myRequest:number=5;
  outPutMasseageContent:string="";

  constructor(private toastr: ToastrService) {}
  outPutMasseage()
  {
    debugger;
    
    this.toastr.success("done", 'Toastr fun!');
  }
}
