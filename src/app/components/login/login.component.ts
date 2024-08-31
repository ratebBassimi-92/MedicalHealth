import { Component, OnInit ,OnChanges, SimpleChanges, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges  {
  numberDays:number=2;

  @Input() itemTitle: string="";
  @Input() messageParent:any;
  messageparent!:string;
  @Output() outDateAge = new EventEmitter();
  
  @Output() sendEventEmiiter= new EventEmitter<string>();
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
    if (changes['numberDays']) {
      this.numberDays=this.numberDays/2;
    }
  }
  
  construactur()
  {

  }
  
  ngOnInit(): void {
     
   }

   SendMessage()
   {
    debugger;
     this.sendEventEmiiter.emit('Rateb from child component');
   }

}
