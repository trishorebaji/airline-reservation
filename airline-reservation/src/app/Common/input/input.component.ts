import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  value=""

  @Input() placeholder: string | undefined
  @Input() inputStyles: any
  @Input() onChangeFirstname: any
  constructor() { 
    

  }
  
  modelChangeFn(event:any){
    this.onChangeFirstname(this.value)
  }

  ngOnInit(): void {
  }

}
